const base = {
    get() {
        return {
            url : "http://localhost:8080/nongjiale/",
            name: "nongjiale",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/nongjiale/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "农家乐内部管理系统"
        } 
    }
}
export default base
