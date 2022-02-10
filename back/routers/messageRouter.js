const express = require("express");
const db = require("../db");

const router = express.Router();

router.post("/sendMessage", (req, res, next) => {
    const {who, whom, content} = req.body;

    console.log(who);
    console.log(whom);
    console.log(content);

    const insertQuery = `
    INSERT INTO message (
        who,
        whom,
        content,
        createdAt
    ) VALUES (
        ${who},
        ${whom},
        "${content}",
        now()
    )    
    `;

    try {
        db.query(insertQuery, (err, rows) => {
            if(err) {
                throw "디비 접속실패"
            }

            return res.status(201).send("성공");
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send("보안코드가 올바르지 않음");
    }
});


router.post("/getMessage", (req, res , next) => {
    const {myId} = req.body;

    const selectQuery = `
    SELECT 	A.id,
		    A.who,
            B.nickname	AS whoName,
            A.whom,
            C.nickname	AS whomName,
            A.content,
            A.isRead,
            A.createdAt
      FROM  message	A
     INNER 
      JOIN  user 	B
        ON	A.who = B.id
     INNER 
      JOIN  user 	C
        ON	A.who = C.id
     WHERE who = ${myId}
	    OR whom= ${myId}
     ORDER BY createdAt DESC  

    `;

    try {
        db.query(selectQuery, (err, rows) => {
            if(err) {
                console.log(err);
                throw "실패"
            }

            return res.status(201).json(rows);
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send("보안코드가 올바르지 않음");
    }
})

module.exports = router;