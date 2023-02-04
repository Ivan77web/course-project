import path from "path";
import webpack from "webpack"
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
    }

    const mode = env.mode || "development"
    const isDev = mode === "development";
    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })

    return config;
};




















// Объяснения

//mode - может выбрать, в каком состоянии сейчас приложение (development - разработка) или (production - публикация)

// entry - входная точка в приложение

// output - куда и как будет собираться наше приложение
// output: {
//     !!! сейчас не используем !!! filename: "bundle.js", - название файла, в который будет собираться приложение 
//     filename: "[name].[contenthash].js", - название файла, в который будет собираться приложение 
//                      [name] - для динамического создания имени файла
//                      [contenthash] - для постоянного кеширования файлов, чтоб у клиента обновлялась версия (1 урок, 1 видео, 7:40)
//     path: path.resolve(__dirname, "build"), - путь к этому файлу
//     clean: true - автоматическая чистка от всех лишних файлов
// }


// plugins - плагины используемые в вебпаке
// new HTMLWebpackPlugin() - создаем объект класса (да, это класс). 
//      Он создает html файл, в который подключает наше приложение (как в реакте в блок root)
//      template: path.resolve(__dirname, "public", "index.html") - тут мы указываем этот index.html
// new webpack.ProgressPlugin(), - плагин, который в логах будет показывать полосу загрузки))))))





// module: {
//     rules: [
//         {
//             test: /\.tsx?$/,
//             use: 'ts-loader',
//             exclude: /node_modules/,
//         },
//     ],
// },

// Здесь мы будем конфигурировать лоадеры, они предназначены для того, чтобы обрабатывать файлы, которые выходят за рамки JS (Png, Jpg, Gif, css, ts и др)
// лоадер это то, что в {}

// test - это расширение, которое мы задаем в лоадер, в нашем случае это регулярное выражение (включает в себя tsx и ts)
// use - лоадер, который для этих файлов нужно использовать
// exclude - исключаем что-то (в нашем случае node-module)






// resolve: { extensions: ['.tsx', '.ts', '.js'],} - здесь мы указываем расширения файлов, которые при импорте мы
// не будем указывать. Пример: мы не будем писать import Comp from "./Comp.js", а будем import Comp from "./Comp"