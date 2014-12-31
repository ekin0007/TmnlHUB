/**
 * 测试界面
 *
 */
var _ = require('underscore'),
    tmnl_mgr = require('../tmnl/tmnl_manager');


exports.handler = function (req, res) {
    res.send({
        "images": [{
            "name": "sara_pumpkin.jpg",
            "size": 2588,
            "lastmod": 1418276219000
        }, {
            "name": "zack_dress.jpg",
            "size": 2645,
            "lastmod": 1418276219000
        }, {
            "name": "kids_hug2.jpg",
            "size": 2476,
            "lastmod": 1418276219000
        }, {
            "name": "zack.jpg",
            "size": 2901,
            "lastmod": 1418276219000
        }, {
            "name": "zack_hat.jpg",
            "size": 2323,
            "lastmod": 1418276219000
        }, {
            "name": "dance_fever.jpg",
            "size": 2067,
            "lastmod": 1418276219000
        }, {
            "name": "zacks_grill.jpg",
            "size": 2825,
            "lastmod": 1418276219000
        }, {
            "name": "gangster_zack.jpg",
            "size": 2115,
            "lastmod": 1418276219000
        }, {
            "name": "sara_smile.jpg",
            "size": 2410,
            "lastmod": 1418276219000
        }, {
            "name": "sara_pink.jpg",
            "size": 2154,
            "lastmod": 1418276219000
        }, {
            "name": "zack_sink.jpg",
            "size": 2303,
            "lastmod": 1418276219000
        }, {
            "name": "up_to_something.jpg",
            "size": 2120,
            "lastmod": 1418276219000
        }, {
            "name": "kids_hug.jpg",
            "size": 2477,
            "lastmod": 1418276219000
        }]
    });
};