const downloadBtn = document.getElementById("download-btn");
downloadBtn.addEventListener("click", () => {
  // Make a request to the URL
  fetch(
    "https://dl.cardknox.com/production/apl/ny/products.json?Expires=1676497915\u0026Signature=boiTLed0-edcL1SLOjpRmYR76up9GXza~uESE8un07bbnmfbiR6bfbj-0QPvXrK-T25qbvbP1~vYls4A5eoQYX3GG6WNMVH~xsKXfmQjIDw20ZB~0JU7jSe~~YC1MtOCxGOS6Px5Fy1BtZ8ugYJLrEXhW2O0MvqGzWHEIG1m7MYZl6R3kRT0oSYGWb0NfPW163MeQ1a64Rh9uLClhZ-jwt4n9aBVfVBV7~yIUZSFaWhfiKLRqn95ylI6CaGsuAgMqGVjM2ZBFOEq1THorKnU~dKq2sFlMFdoTBTcdsWFbk-J6ayQtVpfjL1uJdYwSoq3A6SWX~qgmSeolVhojK8sug__\u0026Key-Pair-Id=APKAJJ2DYU2XDRC2PLEQ"
  )
    .then((response) => response.blob())
    .then((blob) => {
      // Save the response content to a file
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "products.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
});

const downloadBtn2 = document.getElementById("download-btn-2");
downloadBtn2.addEventListener("click", () => {
  // Make a request to the URL
  fetch(
    "https://dl.cardknox.com/production/apl/md/categories.json?Expires=1676494012&Signature=b7~Jgx5q9o14jhYeXM3TvyCQvfQ4yTHJJhjGYkkQsZZuf2iwmdQATfYxsTg8QrSdu6~jLim0suXruEHXS9ltcHv2CdVTx1p-SC5uJynzVlUhE33G60IxzqgZELqWUZxPwoI-~49x0-H9j3FeJgRDjwUJFd4jaoeJ8GuVaQ00wvHS1xfpCMEm5e61vVw8PVH7LIormhRs~0WzD1Tt56zTwnLW8zOmWileF4pAaI8W~U4GAicYdf7cFZ6eO3ZJx0t2lZhUrUV3Kvu~9EoP~j~bEERvV0y5CI"
  )
    .then((response) => response.blob())
    .then((blob) => {
      // Save the response content to a file
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "categories.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
});
