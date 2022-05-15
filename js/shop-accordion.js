
const Area = {
    MAGIC: 0, 
    EPCOT: 1,
    ANIMAL: 2,
}

/**
 * 各エリアに対応したアコーディオンメニューの小項目の要素を生成します。
 * @param {Area} area 対象のエリア
 */
function initShopAccordion(area) {
    var restaurants, attractions;

    /* ========================================================================================
    /*  MagicKingdom
    /* ======================================================================================== */
    if (area == Area.MAGIC) {
        restaurants = {
            "メインストリートUSA": [
                { 
                    placeId: "ChIJ06iAaJ-A54gRuUqOya7bPGU", 
                    position: {lat: 28.41690358430398, lng: -81.58062522127149},
                    name: "トニーのタウンスクウェア・レストラン"
                },
                { 
                    placeId: "ChIJuxftUJ-A54gROd4mpFfOMU4", 
                    position: {lat: 28.417064585238098, lng: -81.58100099490741},
                    name: "The Plaza Restaurant"
                },
                { 
                    placeId: "ChIJzRmVhyJ-3YgRtjt-IZtDZkY", 
                    position: {lat: 28.41792448261324, lng: -81.58110310919119},
                    name: "Plaza Ice Cream Parlor"
                },
                { 
                    placeId: "ChIJbSWVVp-A54gR-1T7NyCXHgM", 
                    position: {lat: 28.417908709386754, lng: -81.58135007558111},
                    name: "Casey's Corner"
                },
                { 
                    placeId: "ChIJbSWVVp-A54gR-1T7NyCXHgM", 
                    position: {lat: 28.417908709386754, lng: -81.58135007558111},
                    name: "Casey's Corner"
                },
            ],
            "アドベンチャーアイランド": [
                { 
                    placeId: "ChIJh2OwH6KA54gRZLcx1Cjk8ic", 
                    position: {lat: 28.418536534844087, lng: -81.58264010644112},
                    name: "Jungle Navigation Co. Ltd. Skipper Canteen"
                },
                { 
                    placeId: "ChIJJ1oRKKKA54gRqehaJ7UtpEc", 
                    position: {lat: 28.418442602856214, lng: -81.58258139627193},
                    name: "Sunshine Tree Terrace"
                },

            ],
            "フロンティアランド": [
                { 
                    placeId: "ChIJcwCMIqKA54gREfRU5B81QYE", 
                    position: {lat: 28.418814232301767, lng: -81.58442325713831},
                    name: "Pecos Bill Tall Tale Inn and Cafe"
                },
            ],
            "リバティースクエア": [
                { 
                    placeId: "ChIJzRmVhyJ-3YgRs-6RThiY_I8", 
                    position: {lat: 28.4189633122844, lng: -81.58283577172666},
                    name: "The Diamond Horseshoe"
                },
                { 
                    placeId: "ChIJp-KiGaKA54gRu93-xkpO62o", 
                    position: {lat: 28.419129620169468, lng: -81.58266545145153},
                    name: "Liberty Tree Tavern"
                },
            ],
            "ファンタジーランド": [
                { 
                    placeId: "ChIJx3W2iZiA54gRAVmRr5RcmwQ", 
                    position: {lat: 28.42125277714205, lng: -81.58071313206625},
                    name: "Be Our Guest Restaurant"
                },
                { 
                    placeId: "ChIJBazEYZiA54gRGUY6dC622aA", 
                    position: {lat: 28.421336322070196, lng: -81.58047855529665},
                    name: "Gaston's Tavern"
                },
                { 
                    placeId: "ChIJ05n0k5iA54gRlzyyJ-DxXTs", 
                    position: {lat: 28.420548670504914, lng: -81.58149306477189},
                    name: "Pinocchio Village Haus"
                },
                { 
                    placeId: "ChIJaRVakZiA54gRDtMA1pMqkqE", 
                    position: {lat: 28.42016226947597, lng: -81.58072607341326},
                    name: "Storybook Treats"
                },
                { 
                    placeId: "ChIJ6Yk3kZiA54gRUajF9YCgVRk", 
                    position: {lat: 28.42014356812095, lng: -81.58086815906806},
                    name: "The Friar's Nook"
                },
            ],
            "トゥモローランド": [
                { 
                    placeId: "ChIJ5akowpiA54gRMSaa5vrormI", 
                    position: {lat: 28.419502625210214, lng: -81.57985911877769},
                    name: "Cosmic Ray's Starlight Café"
                },
                { 
                    placeId: "ChIJb4RHxZiA54gRVs_MumBaX_U", 
                    position: {lat: 28.4187742070909, lng: -81.57940235418876},
                    name: "Auntie Gravity's Galactic Goodies"
                },
                { 
                    placeId: "ChIJ-X2pS5-A54gRQ8b6sW5dsdI", 
                    position: {lat: 28.417939439335925, lng: -81.580530591477},
                    name: "Tomorrowland Terrace Restaurant"
                },
            ]
        }

        attractions = {
            "メインストリートUSA": [
                { 
                    placeId: "ChIJ6ZffRp-A54gRsewAYLZYBi4", 
                    position: {lat: 28.416598947937118, lng: -81.58122230706627},
                    name: "ウォルトディズニーワールド鉄道-メインストリート駅"
                },
                { 
                    placeId: "ChIJVSIzap-A54gRJwBqcaSTEAk", 
                    position: {lat: 28.416752065843788, lng: -81.5808249159628},
                    name: "タウン スクエア シアター"
                },
            ],
            "アドベンチャーランド": [
                { 
                    placeId: "ChIJ2fx4IKKA54gRae-5Ycz7A6s",
                    position: {lat: 28.418327709290704, lng: -81.58303202021878},
                    name: "スイスファミリー・ツリーハウス"
                },
                { 
                    placeId: "ChIJ4x6xj6GA54gRcYUrS30rBi8",
                    position: {lat: 28.418024644522472, lng: -81.58339176169878},
                    name: "ジャングル クルーズ"
                },
                { 
                    placeId: "ChIJW-oMhqGA54gRtZ-1AydNfIU",
                    position: {lat: 28.418419529074885, lng: -81.583748816585},
                    name: "Walt Disney's Enchanted Tiki Room"
                },
                { 
                    placeId: "ChIJMRFKiKGA54gRN1iAboC0f1A",
                    position: {lat: 28.418455736271067, lng: -81.58345999027982},
                    name: "ザ・マジック・カーペッツ・オブ・アラジン"
                },
                { 
                    placeId: "ChIJF2XP2mGB54gRA6IMQ_nhks8",
                    position: {lat: 28.41806389305038, lng: -81.58418559971183},
                    name: "Pirates of the Caribbean"
                },
                { 
                    placeId: "ChIJXeaV8i-B54gRHBLvEfyWai4",
                    position: {lat: 28.41839594687029, lng: -81.58466503310086},
                    name: "海賊の冒険〜七つの海の宝"
                },
            ],
            "フロンティアランド": [
                { 
                    placeId: "ChIJaXtS26OA54gRlS2tw0RKZ8U",
                    position: {lat: 28.419252286847158, lng: -81.58465094035033},
                    name: "スプラッシュ マウンテン"
                },
                { 
                    placeId: "ChIJf_yCtqOA54gRWHzi--HkWFU",
                    position: {lat: 28.420442113337163, lng: -81.58477022926327},
                    name: "ビッグ・サンダー・マウンテン・レイルロード"
                },
                { 
                    placeId: "ChIJb-6dK-yB54gRqCOiRa-Ij6w",
                    position: {lat: 28.419668655640994, lng: -81.58505893269803},
                    name: "Walt Disney World Railroad - Frontierland"
                },
                { 
                    placeId: "ChIJLQuOOaKA54gRHPhLjKfCpeM",
                    position: {lat: 28.419693564256654, lng: -81.58328115575556},
                    name: "トムソーヤ アイランド"
                },
            ],
            "リバティースクエア": [
                { 
                    placeId: "ChIJ8a87VqKA54gRVrP8dHptifo",
                    position: {lat: 28.420645653110586, lng: -81.58307718121475},
                    name: "Haunted Mansion"
                },
            ],
            "ファンタジーランド": [
                { 
                    placeId: "ChIJZ7MGh5iA54gRhuLYyb1122g", 
                    position: {lat: 28.420897155735705, lng: -81.58094193100713},
                    name: "Enchanted Tales with Belle"
                },
                {
                    placeId: "ChIJL2GllJiA54gR9sRoR558Lcg", 
                    position: {lat: 28.42014355411244, lng: -81.58045972084413},
                    name: "プーさんの大冒険"
                },
                { 
                    placeId: "ChIJTd8zkpiA54gRvdy2hIAmyG8", 
                    position: {lat: 28.42057877998934, lng: -81.58035377359124},
                    name: "七人のこびとのマイントレイン"
                },
                { 
                    placeId: "ChIJQyte9piA54gRpAA8j7Qe2pk", 
                    position: {lat: 28.42107019866151, lng: -81.57996582714803},
                    name: "リトル・マーメイド：アリエルのアンダーシー・アドベンチャー"
                },
                { 
                    placeId: "ChIJvytt95iA54gRgcahalWMSSQ", 
                    position: {lat: 28.420934267714685, lng: -81.57967481320034},
                    name: "アリエルの洞窟"
                },
                { 
                    placeId: "ChIJmyFyBJmA54gRZPpjjAfF-j4", 
                    position: {lat: 28.42085510438991, lng: -81.57854733651608},
                    name: "バーンストーマー"
                },
                { 
                    placeId: "ChIJaz-mAZmA54gRFpjxVCJ1zFw",
                    position: {lat: 28.420859475511527, lng: -81.57881687500492},
                    name: "ケーシージュニアスプラッシュアンドソークステーション"
                },
                { 
                    placeId: "ChIJBcNOmZiA54gRDgYiCCi748U",
                    position: {lat: 28.420207158080583, lng: -81.58116796078883},
                    name: "プリンス チャーミング リーガル カルーセル"
                },
                { 
                    placeId: "ChIJZ4mxe6KA54gRhkbd9uRKOUI",
                    position: {lat: 28.420468582686222, lng: -81.58180692210225},
                    name: "\"it's a small world\""
                },
            ],
            "トゥモローランド": [
                { 
                    placeId: "ChIJ98eLQNOB3YgR5AhLf7AucNo",
                    position: {lat: 28.41883354440461, lng: -81.57827045618102},
                    name: "スペース・マウンテン"
                },
                { 
                    placeId: "ChIJ20FmLp-A54gRZuDcunTE4lg",
                    position: {lat: 28.41824146562667, lng: -81.5790518639522},
                    name: "Tomorrowland Transit Authority PeopleMover"
                },
                { 
                    placeId: "ChIJZUpWLZ-A54gRSXZE8ElEfHk",
                    position: {lat: 28.418213623806462, lng: -81.5794667698979},
                    name: "Buzz Lightyear's Space Ranger Spin"
                },
            ]
        }
    }
    /* ========================================================================================
    /*  Epcot
    /* ======================================================================================== */
    else if (area == Area.EPCOT) {
        restaurants = {
            "フューチャー・ワールド・イースト": [
                { 
                    placeId: "ChIJtfk2kq9_3YgRDV7cv6WLWsU", 
                    position: {lat: 28.375476934708043, lng: -81.54938287306211},
                    name: "スペースシップ・アース"
                },
                { 
                    placeId: "ChIJP1MIC6V_3YgRq094JGCMiI8", 
                    position: {lat: 28.373212344974508, lng: -81.54744726389212},
                    name: "Test Track"
                },
                { 
                    placeId: "ChIJKTnfFaV_3YgR9sir8-UaTjQ", 
                    position: {lat: 28.37411778900744, lng: -81.54715390165796},
                    name: "Mission: SPACE Advanced Training Lab"
                },
            ],
            "フューチャー・ワールド・ウェスト": [
                { 
                    placeId: "ChIJs2ExTK5_3YgR54gMqtEkN0c", 
                    position: {lat: 28.37400444628001, lng: -81.55196446214698},
                    name: "ザ・ランド"
                },
                { 
                    placeId: "ChIJrdhZWq5_3YgR-aOTJidfoS8", 
                    position: {lat: 28.373684062461365, lng: -81.55209716456973},
                    name: "Soarin' Around the World"
                },
                { 
                    placeId: "ChIJD6pkAa9_3YgRQW0l8HbBaWU", 
                    position: {lat: 28.37307005047636, lng: -81.55141993704726},
                    name: "Journey Into Imagination With Figment"
                },
                { 
                    placeId: "ChIJa95dRq5_3YgRTGFfUV9u4BM", 
                    position: {lat: 28.374292665612376, lng: -81.55251943811615},
                    name: "Living with the Land"
                },
                { 
                    placeId: "ChIJSVmm069_3YgRxFluyX0Auss", 
                    position: {lat: 28.375186928026608, lng: -81.550551123154},
                    name: "タートル・トーク"
                },
            ],
            "ショーケースプラザ": [
                { 
                    placeId: "ChIJr9muUq9_3YgRCPV9qd5Beq4", 
                    position: {lat: 28.371824419569208, lng: -81.54938106311651},
                    name: "World Showcase"
                },
            ],
            "ワールド・ショーケース": [
                { 
                    placeId: "ChIJhUcstKV_3YgRbdpKlF8OIa8",
                    position: {lat: 28.371434675710102, lng: -81.5472524983395},
                    name: "San Angel Inn Restaurante"
                },
                { 
                    placeId: "ChIJ5WCvL6Z_3YgRPjKR42UFsMA", 
                    position: {lat: 28.370630969232046, lng: -81.54690489546597},
                    name: "Kringla Bakeri Og Kafe"
                },
                { 
                    placeId: "ChIJa45ra6x_3YgRSh4wlPjAk04", 
                    position: {lat: 28.370023395122196, lng: -81.5466606441808},
                    name: "Nine Dragons Restaurant"
                },
                { 
                    placeId: "ChIJKY2BH4h_3YgRflOlFV4uL9s", 
                    position: {lat: 28.36810357466656, lng: -81.54692531883141},
                    name: "Biergarten Restaurant"
                },
                { 
                    placeId: "ChIJ5WCvL6Z_3YgRZhVI9XX3TfI", 
                    position: {lat: 28.36766396905828, lng: -81.5481065134902},
                    name: "Tutto Italia Ristorante"
                },
                { 
                    placeId: "ChIJX_lB7hh-3YgRsxm9CPjGCuE", 
                    position: {lat: 28.36720537480209, lng: -81.54823319879706},
                    name: "Via Napoli Ristorante e Pizzeria"
                },
                { 
                    placeId: "ChIJVVVVFbNi54gRksjcgRiTEHA", 
                    position: {lat: 28.36752800180158, lng: -81.5489891765717},
                    name: "Regal Eagle Smokehouse: Craft Drafts & Barbecue"
                },
                { 
                    placeId: "ChIJYc0a-qh_3YgRdT5xq7FVSBo", 
                    position: {lat: 28.367617878607984, lng: -81.55078156479271},
                    name: "鉄板江戸"
                },
                { 
                    placeId: "ChIJ8adx-qh_3YgRfJ1gXtYQ7AA", 
                    position: {lat: 28.367718070428573, lng: -81.55062803999542},
                    name: "Tokyo Dining"
                },
                { 
                    placeId: "ChIJKY2BH4h_3YgRgmvX19pF52U", 
                    position: {lat: 28.367903368658087, lng: -81.55205166101273},
                    name: "Restaurant Marrakesh"
                },
                { 
                    placeId: "ChIJH9KuP6l_3YgRMgBm4WCmS_g", 
                    position: {lat: 28.36891348634683, lng: -81.55271386392236},
                    name: "Chefs de France"
                },
                { 
                    placeId: "ChIJ5WCvL6Z_3YgR3xsWp_ku00o",
                    position: {lat: 28.370515410119417, lng: -81.55169846326868},
                    name: "Rose & Crown Dining Room "
                },
            ]
        }
        attractions = {
            "フューチャー・ワールド・イースト": [
                { 
                    placeId: "ChIJVVVVFbNi54gR7AYl707VIzA", 
                    position: {lat: 28.374115613999138, lng: -81.54903789170282},
                    name: "Electric Umbrella"
                },
            ],
            "フューチャー・ワールド・ウェスト": [
                { 
                    placeId: "ChIJvUT2aa5_3YgRPksfqsXb1XE", 
                    position: {lat: 28.373966505357288, lng: -81.55266343808961},
                    name: "Garden Grill Restaurant"
                },
                { 
                    placeId: "ChIJ5WCvL6Z_3YgR18tbH_dBeys", 
                    position: {lat: 28.373810522371926, lng: -81.55187230496227},
                    name: "Sunshine Seasons"
                },
                { 
                    placeId: "ChIJ_6SiSap_3YgRtawjgCn9o58", 
                    position: {lat: 28.37521624934086, lng: -81.55042689989611},
                    name: "Coral Reef Restaurant"
                },
            ],
            "ショーケースプラザ": [
                { 
                    placeId: "ChIJVVVVFbNi54gRxSE13xVIf7g", 
                    position: {lat: 28.37172655122195, lng: -81.55056894303445},
                    name: "Refreshment Port"
                },
            ],
            "ワールド・ショーケース": [
                { 
                    placeId: "ChIJl9Ppx7N_3YgR4vJ1xvDxsVQ", 
                    position: {lat: 28.367947597204296, lng: -81.54938388750769},
                    name: "ザ・アメリカン・アドベンチャー館"
                },
                { 
                    placeId: "ChIJ_cr29qh_3YgR3n0UBDrP7Jo", 
                    position: {lat: 28.368055995761356, lng: -81.55050221114207},
                    name: "日本館"
                },
                { 
                    placeId: "ChIJ3TFuL6Z_3YgRK9u67-BaoUU", 
                    position: {lat: 28.368050150227667, lng: -81.54823065172756},
                    name: "イタリア館"
                },
                { 
                    placeId: "ChIJ4fIPRKZ_3YgR1_lHus8rkpU", 
                    position: {lat: 28.368229883445636, lng: -81.54708910756679},
                    name: "ドイツ館"
                },
                { 
                    placeId: "ChIJLYIlzqV_3YgR7WLZ1eiN_js", 
                    position: {lat: 28.370518177479585, lng: -81.54706928004389},
                    name: "ノルウェー館"
                },
                { 
                    placeId: "ChIJwQxN3FN_3YgRrfUeN54NLGU", 
                    position: {lat: 28.37157387429708, lng: -81.54747765931668},
                    name: "メキシコ館"
                },
                { 
                    placeId: "ChIJSSXJG6l_3YgRni-vURvUDWo", 
                    position: {lat: 28.368343672132603, lng: -81.5516151111364},
                    name: "モロッコ館"
                },
                { 
                    placeId: "ChIJ4cvSQal_3YgRNgKSYdsI9yQ", 
                    position: {lat: 28.368885249212678, lng: -81.55286928511585},
                    name: "フランス館"
                },
                { 
                    placeId: "ChIJ9VVt0q5_3YgR3cvNoC7rmaY", 
                    position: {lat: 28.37041576882994, lng: -81.55180953460919},
                    name: "イギリス館"
                },
                { 
                    placeId: "ChIJQ2U1b9R_3YgRU_jUH8-jm-g", 
                    position: {lat: 28.371510057501382, lng: -81.55151654123955},
                    name: "カナダ館"
                },
                { 
                    placeId: "ChIJGxKPmqh_3YgRj80j5HlD-rA", 
                    position: {lat: 28.36833337637726, lng: -81.54939161630205},
                    name: "America Gardens Theatre"
                },
                { 
                    placeId: "ChIJeXKSvKV_3YgRsPXTDa0j87U", 
                    position: {lat: 28.371714906599987, lng: -81.54749102054431},
                    name: "Gran Fiesta Tour Starring The Three Caballeros"
                },
            ]
        }
    }
    /* ========================================================================================
    /*  AnimalKingdom
    /* ======================================================================================== */
    else if (area == Area.ANIMAL) {
        restaurants = [
            { 
                placeId: "ChIJh2OwH6KA54gRZLcx1Cjk8ic", 
                position: {lat: 28.418536534844087, lng: -81.58264010644112},
                name: "レストラン 1"
            },
            { 
                placeId: "ChIJh2OwH6KA54gRZLcx1Cjk8ic", 
                position: {lat: 28.418536534844087, lng: -81.58264010644112},
                name: "レストラン 2"
            },
            { 
                placeId: "ChIJh2OwH6KA54gRZLcx1Cjk8ic", 
                position: {lat: 28.418536534844087, lng: -81.58264010644112},
                name: "レストラン 3"
            },
        ]
        attractions = [
            { 
                placeId: "ChIJh2OwH6KA54gRZLcx1Cjk8ic", 
                position: {lat: 28.418536534844087, lng: -81.58264010644112},
                name: "アトラクション 1"
            },
            { 
                placeId: "ChIJh2OwH6KA54gRZLcx1Cjk8ic", 
                position: {lat: 28.418536534844087, lng: -81.58264010644112},
                name: "アトラクション 2"
            },
        ]
    }
    else {
        console.log("Error: invalid area. initShopAccordion()");
        restaurants = [{}]; attractions = [{}]
    }

    // アルファベット順でソート FIXME: 要修正
    // restaurants.sort(function(a, b) { return a.name > b.name ? 1 : -1 });
    // attractions.sort(function(a, b) { return a.name > b.name ? 1 : -1 });


    
    var parent_ul = $(".acd-parent.restaurant + ul");
    parent_ul.empty();

    // 中項目の動的生成（レストラン）
    for (let key in restaurants) {
        parent_ul.append(
            `<li class="acd-child">
                <div>${key}</div>
                <ul></ul>
            </li>`
        )
        var child_ul = parent_ul.find("ul:last");
        
        // 小項目の動的生成（レストラン）
        for (let i = 0; i < restaurants[key].length; i++) {
            const placeId = restaurants[key][i].placeId;
            const pos = restaurants[key][i].position;
            const name = restaurants[key][i].name;
            child_ul.append(
                `<li class="acd-content" data-place_id="${placeId}" data-lat="${pos.lat}" data-lng="${pos.lng}">${name}</li>`
            )
        }
    }

    // 中項目の動的生成（アトラクション）
    var parent_ul = $(".acd-parent.attraction + ul");
    parent_ul.empty();

    for (let key in attractions) {
        parent_ul.append(
            `<li class="acd-child">
                <div>${key}</div>
                <ul></ul>
            </li>`
        )
        var child_ul = parent_ul.find("ul:last");

        // 小項目の動的生成（アトラクション）
        for (let i = 0; i < attractions[key].length; i++) {
            const placeId = attractions[key][i].placeId;
            const pos = attractions[key][i].position;
            const name = attractions[key][i].name;
            child_ul.append(
                `<li class="acd-content" data-place_id="${placeId}" data-lat="${pos.lat}" data-lng="${pos.lng}">${name}</li>`
            )
        }
    }
    
}

$(function(){

    initShopAccordion(Area.MAGIC);

    // ヘッダーのエリア選択でアコーディオンメニューの項目を動的に変化させる
    $("body").on("click", "#magic",  function() {
        initShopAccordion(Area.MAGIC);
        $(".btn--sq-arrow.shop-geoloc-btn.disabled").removeClass("disabled");
        $(".btn--sq-arrow.back-geoloc-btn").addClass("disabled");
        $("#bottom-area-title").text($("#magic").text());
    });
    $("body").on("click", "#epcot",  function() {
        initShopAccordion(Area.EPCOT);
        $(".btn--sq-arrow.shop-geoloc-btn.disabled").removeClass("disabled");
        $(".btn--sq-arrow.back-geoloc-btn").addClass("disabled");
        $("#bottom-area-title").text($("#epcot").text());
    });
    $("body").on("click", "#animal", function() {
        initShopAccordion(Area.ANIMAL);
        $(".btn--sq-arrow.shop-geoloc-btn.disabled").removeClass("disabled");
        $(".btn--sq-arrow.back-geoloc-btn").addClass("disabled");
        $("#bottom-area-title").text($("#animal").text());
    });

    // 大項目のクリックイベント
    $("body").on("click", "div.acd-parent", function() {
        $(this).next('ul').slideToggle('fast');
    });
    // 中項目のクリックイベント
    $("body").on("click", "li.acd-child:not(.open)", function(e) {
        $(this).toggleClass('open');
        $(this).children('ul').slideToggle('fast');
        e.stopPropagation();
    });
    // 展開された中項目のクリックイベント
    $("body").on("click", "li.acd-child.open > div", function(e) {
        var li = $(this).parent();
        li.removeClass('open');
        li.children('ul').slideToggle('fast');
        e.stopPropagation();
    });

})