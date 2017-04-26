/**
 * Created by Neo on 2017/4/26.
 */
$(function () {
    "use strict";

    var table = $('#orderTable').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "../mock/orderData.json",
            "data": function (d) {
                return $.extend({}, d, extendData());
            }
        },
        "ordering": false,
        "dom": "<'row'<'col-sm-12'<'js-selectToolbar'>>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        "columns": [
            {
                "title": "#", "data": "id"
            },
            {
                "title": "订单号", "data": "order_id"
            },
            {
                "title": "购买用户", "data": "order_user"
            },
            {
                "title": "手机号", "data": "phone"
            },
            {
                "title": "商品品类", "data": "category"
            },
            {
                "title": "商品型号", "data": "type"
            },
            {
                "title": "数量", "data": "amount"
            },
            {
                "title": "充值套餐", "data": "package"
            },
            {
                "title": "支付方式", "data": "method"
            },
            {
                "title": "订单总金额", "data": "total"
            },
            {
                "title": "安装地址", "data": "address"
            },
            {
                "title": "状态", "data": "status"
            },
            {
                "title": "下单时间", "data": "order_time"
            },
            {
                title: "操作",
                className: 'table-action',
                data: function () {
                    return '<a href="javascript:;" class="js-checkUser"><i class="fa fa-check-circle-o" aria-hidden="true"></i>&nbsp;查看</a>';
                }
            }
        ],
        "lengthMenu": [10, 15, 20],
        "displayLength": 10,
        "drawCallback": function () {
            clearSearchValue();
        }
    });


    $(document).on('click', '.js-search', function () {
        // 点击搜索方法。但如果数据为空，是否阻止
        table.ajax.reload();
    }).on('click', '.js-checkUser', function () {
        // TODO
        // 需要获取一些参数供详情跳转
    });
    $('.js-orderStatus').find('a').click(function () {
        var status = $(this).attr('data-status');
        console.log(status);
    });
    // 添加额外的参数
    function extendData() {
        var formItem = $('.js-selectToolbar').find('.form-control');
        if (formItem.length === 0)  return {};
        var data = {};

        formItem.each(function () {
            var t = $(this);
            var n = t.attr('name');
            var v = t.val();
            if (v) data[n] = v;
        });
        console.log(data);
        return data;
    }

    function clearSearchValue() {
        //TODO
    }
});