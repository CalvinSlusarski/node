/// <reference path="dep/pixi.dev.js" />
/// <reference path="../../../lib/hexPixi.js" />

(function(root, factory) {
    if (typeof define == 'function' && define.amd) {
        define(['pixi', 'hexPixi'], function (pixi, hexPixi) {
            factory(root, pixi, hexPixi);
        });
    } else if (typeof exports == 'object') {
        factory(root, require('pixi'), require('hexPixi'));
    } else {
        factory(root, root.PIXI, root.hexPixi);
    }
}(this, function(root, pixi, hexPixi) {
    'use strict';

    var map = null,
        stage = new pixi.Container(),
        renderer = new pixi.autoDetectRenderer(800, 600, {
            antialiasing: false,
            transparent: false,
            resolution: 1
        });

    renderer.backgroundColor = 0x000000;

    function animate() {
        window.requestAnimationFrame(animate);
        // render the stage
        renderer.render(stage);
    }

    function getOptions() {
        return {
            mapWidth: 30,
            mapHeight: 30,
            coordinateSystem: 2,
            hexLineWidth: 2,
            hexLineColor: 0xd0d0d0,
            hexWidth: 65,
            hexHeight: 65,
            hexBottomPad: 24,
            // showCoordinates: true,
            textures: [                
                "images/tile/tileGrass.png",
                "images/tile/tileSand.png",
                "images/tile/tileDirt.png",
                "images/tile/tileRock.png",
                "images/tile/tileSnow.png",
                "images/tile/tileWater.png"
            ],
            terrainTypes: [
                { name: "dirt", textureIndex: 2, color: 0x9B5523 },
                { name: "sand", textureIndex: 1, color: 0xdBd588 },
                { name: "snow", textureIndex: 4, color: 0xebebfa },
                { name: "water", textureIndex: 5,color: 0x3498db },
                { name: "grass", textureIndex: 0,color: 0x7aa451 }
            ],
            onAssetsLoaded: function () {
                try{
                    renderer.render(stage);
                    animate();
                }
                catch (e){
                    console.error(e);
                }
            },
            onHexClick: function(a,b,c){
                console.log(a);
                console.log(b);
                console.log(c);
            }
        };
    }

    function setupPixiJs() {
        // add the renderer view element to the DOM
        var div = document.getElementById('stage');
        div.appendChild(renderer.view);

        map = new hexPixi.Map(stage, getOptions());
    }

    function initPage() {
        setupPixiJs();

        map.generateRandomMap();
        console.log(map);
    }

    initPage();
}));