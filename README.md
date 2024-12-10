# blog
my blog

[hexo](https://hexo.io)
[icarus](https://github.com/ppoffice/hexo-theme-icarus)
[docs](https://cloud.tencent.com/developer/article/1961086)
####
```
npm install 

// 安装git插件
npm install --save hexo-deployer-git

// 开发
hexo generate
hexo server

// 部署
hexo clean && hexo deploy


// 添加子模块
git submodule add git@github.com:astroxu/hexo-theme-icarus.git themes/hexo-theme-icarus
git submodule add https://github.com/astroxu/hexo-theme-icarus.git themes/hexo-theme-icarus

// 切换子模块分支
git config -f .gitmodules submodule.themes/hexo-theme-icarus.branch $P_

// 同步子模块
git submodule sync
git submodule update --remote

// 查看子模块状态
cd themes/hexo-theme-icarus
git status


```
