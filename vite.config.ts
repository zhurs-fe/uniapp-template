import { defineConfig, loadEnv, UserConfig } from 'vite'
import requireTransform from 'vite-plugin-require-transform'
import uni from '@dcloudio/vite-plugin-uni'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log(command, mode, env)

  let config: UserConfig = {
    resolve: { alias: { '~': path.resolve(__dirname, './src') } },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          additionalData: `@import "~/styles/var.scss";`,
        },
      },
    },

    plugins: [
      uni(),
      // @ts-ignore
      requireTransform({
        fileRegex: /.ts$|.js$|.vue$/,
      }),
    ],
    server: {
      port: 8080,
    },
  }

  if (command === 'serve') {
    // 仅开发
    return config
  } else {
    // 生产
    return config
  }
})
