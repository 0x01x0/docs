(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{351:function(a,r,t){"use strict";t.r(r);var e=t(4),s=Object(e.a)({},(function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("90% 以上出现的问题都是没仔细阅读教程和基础知识薄弱导致的，认真学习基础知识，仔细阅读教程中的每一个字，你会发现答案就在其中。")]),a._v(" "),t("p",[a._v("以下是一些基本的排错方法，视实际情况而定，不要无脑复制粘贴。")]),a._v(" "),t("h2",{attrs:{id:"重启"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重启"}},[a._v("#")]),a._v(" 重启")]),a._v(" "),t("p",[a._v("Aria2 Pro 具有自我修复机制，遇到问题首先重启。如果你修改过配置文件，先删除配置文件后重启。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker restart aria2-pro\n")])])]),t("h2",{attrs:{id:"重装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重装"}},[a._v("#")]),a._v(" 重装")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker rm -f aria2-pro\ndocker rmi p3terx/aria2-pro\nrm -rf ~/aria2-config\ndocker pull p3terx/aria2-pro\ndocker run <...>\n")])])]),t("h2",{attrs:{id:"更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[a._v("#")]),a._v(" 更新")]),a._v(" "),t("p",[a._v("也许你的问题在最新的版本中已经得到解决，多多关注项目页面动态。一些重要更新会在 Aria2 Channel 推送。")]),a._v(" "),t("p",[a._v("以下是使用 "),t("RouterLink",{attrs:{to:"/related/watchtower/"}},[a._v("Watchtower")]),a._v(" 一键更新 Aria2 Pro 容器的命令：")],1),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker run --rm \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  containrrr/watchtower -cR \\\n  aria2-pro\n")])])]),t("h2",{attrs:{id:"查看日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看日志"}},[a._v("#")]),a._v(" 查看日志")]),a._v(" "),t("p",[a._v("凡事都要追根溯源，查看日志才能更好的找到问题的根本，即使你看不懂，也要学会如何查看。")]),a._v(" "),t("p",[a._v("查看实时日志")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker logs -f --tail 30 aria2-pro\n")])])]),t("p",[a._v("导出日志")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker logs aria2-pro > ~/aria2-pro.log\n")])])]),t("h2",{attrs:{id:"提问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提问"}},[a._v("#")]),a._v(" 提问")]),a._v(" "),t("p",[a._v("你可以加入 Aria2 TG 群和小伙伴们一起讨论。要注意提问的方式和提供有用的信息，提问前最好去了解"),t("a",{attrs:{href:"https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("《提问的智慧》"),t("OutboundLink")],1),a._v("，这能更好的帮助你去解决问题和节约时间。诸如 “为什么不能使用？”、“那你能帮帮我吗？” 之类的问题并不能解决什么问题，你只能得到否定的回答。")]),a._v(" "),t("h2",{attrs:{id:"提交-bug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交-bug"}},[a._v("#")]),a._v(" 提交 BUG")]),a._v(" "),t("p",[a._v("提交 BUG 请前往项目 "),t("a",{attrs:{href:"https://github.com/P3TERX/docker-aria2-pro/issues",target:"_blank",rel:"noopener noreferrer"}},[a._v("issues"),t("OutboundLink")],1),a._v(" 页面，但请注意您需要先知道什么是 BUG 。")])])}),[],!1,null,null,null);r.default=s.exports}}]);