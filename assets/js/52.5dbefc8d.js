(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{380:function(e,n,o){"use strict";o.r(n);var t=o(4),r=Object(t.a)({},(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("与 OneDrive 不同的是，Google Drive 不需要本地 Win­dows 客户端预先进行授权获取 to­ken，而是在配置过程中进行授权。")]),e._v(" "),o("p",[e._v("输入 rclone config 命令，会出现以下信息，参照下面的注释进行操作。")]),e._v(" "),o("blockquote",[o("p",[e._v("TIPS: 因为 RCLONE 会时不时进行更新，当你看到这篇教程时菜单选项可能已经发生了略微的改动，但大致思路不会变，不要无脑照搬操作。")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('e) Edit existing remote\nn) New remote\nd) Delete remote\nr) Rename remote\nc) Copy remote\ns) Set configuration password\nq) Quit config\ne/n/d/r/c/s/q> n  # 选择n，新建\nname> Google  # 输入名称，类似于标签，用于区分不同的网盘。\nType of storage to configure.\nEnter a string value. Press Enter for the default ("").\nChoose a number from below, or type in your own value\n 1 / A stackable unification remote, which can appear to merge the contents of several remotes\n   \\ "union"\n 2 / Alias for a existing remote\n   \\ "alias"\n 3 / Amazon Drive\n   \\ "amazon cloud drive"\n 4 / Amazon S3 Compliant Storage Providers (AWS, Ceph, Dreamhost, IBM COS, Minio)\n   \\ "s3"\n 5 / Backblaze B2\n   \\ "b2"\n 6 / Box\n   \\ "box"\n 7 / Cache a remote\n   \\ "cache"\n 8 / Dropbox\n   \\ "dropbox"\n 9 / Encrypt/Decrypt a remote\n   \\ "crypt"\n10 / FTP Connection\n   \\ "ftp"\n11 / Google Cloud Storage (this is not Google Drive)\n   \\ "google cloud storage"\n12 / Google Drive\n   \\ "drive"\n13 / Hubic\n   \\ "hubic"\n14 / JottaCloud\n   \\ "jottacloud"\n15 / Local Disk\n   \\ "local"\n16 / Mega\n   \\ "mega"\n17 / Microsoft Azure Blob Storage\n   \\ "azureblob"\n18 / Microsoft OneDrive\n   \\ "onedrive"\n19 / OpenDrive\n   \\ "opendrive"\n20 / Openstack Swift (Rackspace Cloud Files, Memset Memstore, OVH)\n   \\ "swift"\n21 / Pcloud\n   \\ "pcloud"\n22 / QingCloud Object Storage\n   \\ "qingstor"\n23 / SSH/SFTP Connection\n   \\ "sftp"\n24 / Webdav\n   \\ "webdav"\n25 / Yandex Disk\n   \\ "yandex"\n26 / http Connection\n   \\ "http"\nStorage> 12  # 选择12，Google Drive\n** See help for drive backend at: https://rclone.org/drive/ **\n\nGoogle Application Client Id\nLeave blank normally.\nEnter a string value. Press Enter for the default ("").\nclient_id>  # 留空，回车\nGoogle Application Client Secret\nLeave blank normally.\nEnter a string value. Press Enter for the default ("").\nclient_secret>  # 留空，回车\nScope that rclone should use when requesting access from drive.\nEnter a string value. Press Enter for the default ("").\nChoose a number from below, or type in your own value\n 1 / Full access all files, excluding Application Data Folder.\n   \\ "drive"\n 2 / Read-only access to file metadata and file contents.\n   \\ "drive.readonly"\n   / Access to files created by rclone only.\n 3 | These are visible in the drive website.\n   | File authorization is revoked when the user deauthorizes the app.\n   \\ "drive.file"\n   / Allows read and write access to the Application Data folder.\n 4 | This is not visible in the drive website.\n   \\ "drive.appfolder"\n   / Allows read-only access to file metadata but\n 5 | does not allow any access to read or download file content.\n   \\ "drive.metadata.readonly"\nscope> 1\nID of the root folder\nLeave blank normally.\nFill in to access "Computers" folders. (see docs).\nEnter a string value. Press Enter for the default ("").\nroot_folder_id>  # 留空，回车\nService Account Credentials JSON file path\nLeave blank normally.\nNeeded only if you want use SA instead of interactive login.\nEnter a string value. Press Enter for the default ("").\nservice_account_file>\nEdit advanced config? (y/n)\ny) Yes\nn) No\ny/n> n\nRemote config\nUse auto config?\n * Say Y if not sure\n * Say N if you are working on a remote or headless machine or Y didn\'t work\ny) Yes\nn) No\ny/n> n\nIf your browser doesn\'t open automatically go to the following link: https://accounts.google.com/o/oauth2/auth?access_type=offline&client_id=XXXXXXXXXXX.apps.googleusercontent.com&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive&state=XXXXXXXXXXXXXXXXXXXX\nLog in and authorize rclone for access  # 会弹出浏览器，要求你登录账号进行授权。如果没有弹出，复制上面的链接到浏览器中打开进行授权。\nEnter verification code>  # 在这里输入网页上显示的验证码\n\nConfigure this as a team drive?\ny) Yes\nn) No\ny/n> y\nFetching team drive list...\nNo team drives found in your account--------------------\n[Google]\ntype = drive\nscope = drive\ntoken = {"access_token":"XXXXXXXXXXXXXXXXXXXXX"}\n--------------------\ny) Yes this is OK\ne) Edit this remote\nd) Delete this remote\ny/e/d> y\nCurrent remotes:\n\nName                 Type\n====                 ====\nGoogle               drive\nP3TERX               onedrive\n\ne) Edit existing remote\nn) New remote\nd) Delete remote\nr) Rename remote\nc) Copy remote\ns) Set configuration password\nq) Quit config\ne/n/d/r/c/s/q> q\n')])])]),o("p",[e._v("至此，Rclone 已成功连接到了 Google Drive 网盘。")])])}),[],!1,null,null,null);n.default=r.exports}}]);