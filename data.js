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
        "yaw": -0.31452390892825655,
        "pitch": 0.19789962632776437,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 1.1400798376001955,
          "pitch": 0.15788503257746278,
          "rotation": 0,
          "target": "2-dnevni-boravak"
        },
        {
          "yaw": 2.944027960885542,
          "pitch": 0.18375353799317296,
          "rotation": 0,
          "target": "1-kuhinja"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kuhinja",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.0257387182406237
      },
      "linkHotspots": [
        {
          "yaw": 0.06484063678881569,
          "pitch": 0.12612778159184046,
          "rotation": 0,
          "target": "0-blagovaonica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dnevni-boravak",
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
        "yaw": -0.29882278180298094,
        "pitch": 0.13461856585507093,
        "fov": 0.8494220755906051
      },
      "linkHotspots": [
        {
          "yaw": 0.05934315848050353,
          "pitch": 0.08521154722748037,
          "rotation": 0,
          "target": "0-blagovaonica"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Pano_Proba",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
