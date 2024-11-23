/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'assets/videos/', // ตั้งที่อยู่ที่จะบันทึกไฟล์
                    },
                },
            ],
        });

        return config;
    },
};

export default nextConfig;
