# FruitNijia
水果忍者Cocos 微信小游戏版

![screenshot](https://github.com/ganl/mdAssets/raw/master/img/minigame-FruitNijia/welcome.png)

# ** 微信小游戏运行教程 **

## 准备工作

1. `cocos2d-html5-3.16-wechatgame.zip`包含已经适配微信小游戏的 Cocos2d-html5 引擎 (基于Cocos2d-html5 v3.16版本) 和 WeChatGame 依赖文件。
2. 下载微信小程序工具[下载链接](https://mp.weixin.qq.com/debug/wxagame/dev/devtools/devtools.html?t=201814)

## 发布步骤

1. 将发布包的 frameworks/cocos2d-html5 替换为微信小游戏定制版 Cocos2d-html5 引擎（cocos2d-html5-3.16-wechatgame.zip）后，通过命令行 `cocos compile -p web -m release` 重新发布 web 版本。
2. 把 `WeChatGame` 内的文件拷贝到发布后 `publish/html5` 的目录下。
3. 由于小游戏上传资源限制为 4mb，所以当整体包体超过 4mb 的时候，需要将资源移到远程服务器中，如果包体没有超过限制，跳过步骤 4 和 5。
4. 把 `publish/html5` 目录下的 `project.json` 和 `res` 资源文件夹移到服务器目录下。注意：远程资源不应该超过 50mb，这是微信小游戏缓存空间的上限。
5. 开启服务器后，需要修改 `game.js` 中 `window.REMOTE_SERVER_ROOT` 为当前开启服务器的路径，这样才能加载到远程资源。
6. 打开微信工具点击创建小程序项目，项目目录选择打包后 `publish/html5` 的目录，添加 appid 和项目名称后进行创建项项目，就可以在微信工具中调试，发布微信小游戏了。（目前用户尚无法申请 appid，请使用微信开发者工具的 “体验小游戏” 功能）

## 注意事项：

http://forum.cocos.com/t/cocos2d-html5-3-16/55119
