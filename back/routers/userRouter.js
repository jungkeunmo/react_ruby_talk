const { json } = require("express");
const express = require("express");
const db = require("../db");
const nodemailer = require("nodemailer");
const smtpPool = require("nodemailer-smtp-pool");
const dotenv = require("dotenv");
dotenv.config();

const smtpTransport = nodemailer.createTransport(
    smtpPool({
      service: "Gmail",
      host: "localhost",
      port: "465",
      tls: {
        rejectUnauthorize: false,
      },
  
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
      maxConnections: 5,
      maxMessages: 10,
    })
);

const sendMail = async (email) => {
    await smtpTransport.sendMail(email, (err, info) => {
        if(err) {
            console.log(err);        
        }else {
            console.log("Email Send Success :", info);
        };
    });
};

const router = express.Router();

router.post("/emailCheck", async(req, res, next) => {
    const {email} = req.body;


    const searchQuery = `
        SELECT id
          FROM user
         WHERE email = "${email}" 
    `;

    db.query(searchQuery, (err, rows) => {
        if(rows.length === 0) {
            return res.status(400),json({result : false});
        }

        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        const num3 = Math.floor(Math.random() * 10);
        const num4 = Math.floor(Math.random() * 10);

        const code = "" + num1 + num2 + num3 + num4;

        const codeUpdateQuery = `
            UPDATE user
            SET secretCode = ${code},
	        updatedAt = now()
            WHERE	id = ${rows[0].id}  
        `;

        db.query(codeUpdateQuery, (err, rows) => {
            if (err) {
                return res.status(400).json({ result: false});
            };

            const  sendData = {
                from : "4leaf-edu.com",
                to : email,
                subject : "안녕하세요 로그인 보안 코드 입니다.",
                html : `보안코드는 <h2>${code}<h2> 입니다`
            }

            sendMail(sendData);
            // smtp pool

            // 먼저 발신자의 정보를 등록한다 (앱 비밀번호)
            // 제목 , 내용등 발송할 이메일의 내용을 입력한다.
            // 수신자의 정보를 등록한다.
            // smtp tcp(25)에 전송한다.
            // 전송에 성공했는지 실패했는지 확인한다.
        });
    });

    // 데이터베이스에 사용자가 입력한 이메일 있어? O

    //있으면 랜덤한 숫자 4개를 생성해
    //해당 이메일 방금 생성한 숫자 4개를 전송해
    //그 이메일에 해당하는 사용자의 secretCode에 생성한 난수 4가지를 저장해

    //없으면, 사용자한테 가입된 이메일이 나니라고 메세지줘!

    return res.status(200).send("이메일 로그인 요청");
});

router.post("/checkCode", (req, res, next) => {
    const { email, code } = req.body;

    try {
        const checkQuery = `
            SELECT  id, 
                    email,
                    nickname,
                    avatar,
                    statusMsg
              FROM  user
             WHERE   email = "${email}"
               AND secretCode = ${code}
        `;

        db.query(checkQuery, (err, rows) => {
            if(err) {
                return res.status(400).send("로그인을 다시시도 해주세요");
            }; 

            return res.status(200).json(rows[0])
        });
    } catch (error) {
        console.log(error);
        return res.status(400).send("보안코드가 올바르지 않음");
    }
})

router.post("/friend/list", (req, res, next) => {
    const {me} = req.body;

    try {
        const listQuery = `
            SELECT  id, 
		            nickname,
                    statusMsg,
                    avatar
              FROM user
             WHERE id IN (
	            SELECT whom
	              FROM friend
	             WHERE who = ${me}
            )
        `;

        db.query(listQuery, (err, rows) => {
            if (err) {
                console.error(err);
                return res.status(400).send("성공");
            }

            return res.status(200).json(rows);
        })
    } catch (error) {
        console.log(error)
        return res.status(400).send("실패")
    }
})

module.exports = router;