var APP_DATA = {
  "scenes": [
    {
      "id": "0-blagovaonica",
      "name": "Blagovaonica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.2427391700754704,
        "pitch": 0.21375828738680092,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 1.1026756493697825,
          "pitch": 0.11446346998144108,
          "rotation": 0,
          "target": "1-dnevni-boravak"
        },
        {
          "yaw": 2.9534514454386525,
          "pitch": 0.15235999911186582,
          "rotation": 0,
          "target": "2-kuhinja"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dnevni-boravak",
      "name": "Dnevni boravak",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.3786462123409962,
        "pitch": 0.16401648586669282,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 0.03533328323180385,
          "pitch": 0.07639054678202406,
          "rotation": 0,
          "target": "0-blagovaonica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kuhinja",
      "name": "Kuhinja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.004115623355176012,
        "pitch": 0.027973504352811318,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 0.07195616431882534,
          "pitch": 0.11584978257795697,
          "rotation": 0,
          "target": "0-blagovaonica"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Virtualna šetnja",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
