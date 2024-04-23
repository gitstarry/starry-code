import { defineRouter } from "vitepress";

export const router = defineRouter({
  async router() {
    // 使用 getFileRoutesFromDirectory 自动生成路由
    const routes = await this.resolved.app.getFileRoutes("guides");
    return routes;
  },
  outDir: "../dist",
});
