const router = require("express").Router();
const Modal = require("../models/modalModel");
const mongoose = require("mongoose");

router.post("/add", async (req, res) => {
  try {
    let { name, price, menuId } = req.body.data;

    // validate

    if (!name)
      return res.status(400).json({ msg: "Please complete all fields." });

    const newModal = new Modal({
      name,
      price,
      menuId
    });
    const savedModal = await newModal.save();
    res.json(savedModal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/byMenu", async (req, res) => {
  Modal.find({ menuId: req.body.data.id }, function (err, modals) {
    if(err){
        res.send(err);
    }else{
        res.send(modals);
    }
})
});

module.exports = router;
