<template>
    <div class="gitalk-container">
      <div id="gitalk-container"></div>
    </div>
</template>
<script>
import md5 from "md5"
import Gitalk from "gitalk"
import "gitalk/dist/gitalk.css"
export default {
  name: "gitalk",
  data() {
    return {}
  },
  mounted() {
    const commentConfig = {
      clientID: "Iv23liS0CCzOaPKxEIGl",
      clientSecret: "bfff3168de3aa0349c8117c4f49307f0a3d175ab",
      repo: "jichangtuijian.github.io",
      owner: "haibing3344",
      admin: ["haibing3344"],
      id: md5(location.pathname),
      distractionFreeMode: false,
    }
    const gitalk = new Gitalk(commentConfig)
    gitalk.render("gitalk-container")
  },
}
</script>
<style>
.gt-container .gt-header-textarea {
  color: #000;
}
</style>