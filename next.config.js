/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,

  /* The HEARTBEAT demo is a self-contained page copied into
     public/heartbeat/. Next serves public files by exact path, so
     /heartbeat/index.html resolves but /heartbeat does not. This maps the
     clean URL onto the file. It reads its data from
     /heartbeat/data.json and its clips from /heartbeat/audio/, both of
     which are already served straight out of public/. */
  /* The World Model Bench demo keeps its own relative paths
     ("data.js", "../benchmark/..."), so it only resolves correctly when the
     URL keeps its trailing slash. Next normalises "/x/" to "/x" by default,
     which would send those relative paths one directory too high. */
  skipTrailingSlashRedirect: true,

  async rewrites() {
    return [
      { source: '/heartbeat', destination: '/heartbeat/index.html' },
      {
        source: '/world-model-bench/demo/',
        destination: '/world-model-bench/demo/index.html',
      },
    ]
  },
}

module.exports = nextConfig
