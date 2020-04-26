(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{338:function(e,n,o){"use strict";o.r(n);var r=o(4),t=Object(r.a)({},(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("下载到本地然后通过 RCLONE 上传到指定网盘，本地不保留文件，实现 OneDrive 和 Google Drive 等网盘的伪离线下载。")]),e._v(" "),o("ul",[o("li",[e._v("启动命令加入-e RCLONE=enable参数开启 RCLONE 自动上传功能。启动命令示例：")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("docker run -d \\\n    --name aria2-pro \\\n    --restart unless-stopped \\\n    --log-opt max-size=1m \\\n    --network host \\\n    -e PUID=$UID \\\n    -e PGID=$GID \\\n    -e RPC_SECRET=P3TERX \\\n    -e RPC_PORT=6800 \\\n    -e LISTEN_PORT=6888 \\\n    -v ~/aria2-config:/config \\\n    -v ~/rclone-downloads:/downloads \\\n    -e RCLONE=enable \\\n    p3terx/aria2-pro\n")])])]),o("ul",[o("li",[e._v("首次配置可使用docker exec -it aria2-pro rclone config命令进入 RCLONE 交互菜单选项，配置方法可参考："),o("RouterLink",{attrs:{to:"/related/rclone/"}},[e._v("《Rclone 安装配置教程》")]),e._v("。")],1)]),e._v(" "),o("blockquote",[o("p",[e._v("如果之前使用过 RCLONE 可以在宿主机的默认位置找到 RCLONE 的配置文件（~/.config/rclone/rclone.conf），复制到 Aria2 Pro 配置目下即可。")])]),e._v(" "),o("ul",[o("li",[e._v("最后你需要修改 Aria2 Pro 配置文件目录下autoupload.sh文件中的网盘名称与目标路径这两个选项。下载目录不要修改，容器已经对此进行定义。")])])])}),[],!1,null,null,null);n.default=t.exports}}]);