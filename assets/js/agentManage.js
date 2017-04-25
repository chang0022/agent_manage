/**
 * Created by Chang on 2017/4/25.
 */
$(function () {
    "use strict";

    var table = $('#agentTable').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": '../mock/agentData.json',
        "ordering": false,
        "dom": "<'row'<'col-sm-12'<'js-selectToolbar'>>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        "columns": [
            {
                title: '',
                target: 0,
                className: 'treegrid-control table-action',
                data: function (item) {
                    if (item.children) {
                        return '<span><i class="fa fa-chevron-right" aria-hidden="true"></i></span>';
                    }
                    return '';
                }
            },
            {
                "title": "级别", "data": "rank"
            },
            {
                "title": "用户", "data": "name"
            },
            {
                "title": "手机号", "data": "phone"
            },
            {
                "title": "不知道是啥", "data": "idotno"
            },
            {
                "title": "销售总额", "data": "total_sales"
            },
            {
                title: "操作",
                className: 'table-action',
                data: function () {
                    return '<a href="javascript:;" class="js-checkUser"><i class="fa fa-check-circle-o" aria-hidden="true"></i>&nbsp;查看</a>';
                }
            }
        ],
        "treeGrid": {
            "left": 20,
            "expandIcon": '<span><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
            "collapseIcon": '<span><i class="fa fa-chevron-down" aria-hidden="true"></i></span>'
        },
        "lengthMenu": [10, 15, 20],
        "displayLength": 10,
        "drawCallback": function () {
            clearSearchValue();
        }
    });
    $("div.js-selectToolbar").html($("#selectToolbar").html());

    $(document).on('click', '.js-search', function () {
        searchData();
    }).on('click', '.js-checkUser', function () {
        $('#content', parent.document).attr('src', 'agentDetail.html');
    });

    function searchData() {
        var data = {};
        var name = $(".js-searchName");
        var rank = $(".js-searchRank");
        if (!name.val() && !rank.val()) {
            layer.msg('搜索条件不能为空', {offset: ['200px']})
            return false;
        }
        data[name.attr('name')] = name.val();
        data[rank.attr('name')] = rank.val();
        table.search(JSON.stringify(data)).draw();
    }

    function clearSearchValue() {
        //TODO
    }
});