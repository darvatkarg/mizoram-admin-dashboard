const protocol = "https";
// const protocol = "http";

// const host = "103.86.177.17";
// const port = "5000";

// const host = "192.168.29.22";
// const port = "8088";
const host = "api.elibrarysmartcityadmin.education";
const port = "";
const trailUrl = "";

const hostUrl = `${protocol}://${host}${port ? ":" + port : ""}`;
const endpoint = `${protocol}://${host}${port ? ":" + port : ""}${trailUrl}`;

export default {
  protocol: protocol,
  host: host,
  port: port,
  apiUrl: trailUrl,
  endpoint: endpoint,
  hostUrl: hostUrl,
};
