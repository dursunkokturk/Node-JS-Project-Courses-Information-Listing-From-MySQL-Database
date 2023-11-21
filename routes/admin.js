// express Library yi Ekliyoruz
const express = require("express");

// express Library Uzerinden
// Router Interface ini Kullaniyoruz
const router = express.Router();

router.use("/blog/create", function(request, response) {

    // Sayfa Yonlendirme Isleminde SendFile Yerine
    // render Kullaniliyor
    response.render("admin/blog-create");
});

router.use("/blogs/:blogid", function(request, response) {
    response.render("admin/blog-edit");
});

router.use("/blogs", function(request, response) {
    response.render("admin/blog-list");
});

module.exports = router;