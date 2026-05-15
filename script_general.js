(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer","this.IconButton_3F27B1F5_2C09_4364_41B8_4B79F39FA3FA"],"scripts":{"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"getMediaByName":TDV.Tour.Script.getMediaByName,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getMainViewer":TDV.Tour.Script.getMainViewer,"clone":TDV.Tour.Script.clone,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"historyGoForward":TDV.Tour.Script.historyGoForward,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"downloadFile":TDV.Tour.Script.downloadFile,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setValue":TDV.Tour.Script.setValue,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getKey":TDV.Tour.Script.getKey,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"unloadViewer":TDV.Tour.Script.unloadViewer,"openLink":TDV.Tour.Script.openLink,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPixels":TDV.Tour.Script.getPixels,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"playAudioList":TDV.Tour.Script.playAudioList,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"quizStart":TDV.Tour.Script.quizStart,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"showWindowBase":TDV.Tour.Script.showWindowBase,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"init":TDV.Tour.Script.init,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"isPanorama":TDV.Tour.Script.isPanorama,"getComponentByName":TDV.Tour.Script.getComponentByName,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"registerKey":TDV.Tour.Script.registerKey,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"shareSocial":TDV.Tour.Script.shareSocial,"unregisterKey":TDV.Tour.Script.unregisterKey,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"enableVR":TDV.Tour.Script.enableVR,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"executeJS":TDV.Tour.Script.executeJS,"setMapLocation":TDV.Tour.Script.setMapLocation,"quizFinish":TDV.Tour.Script.quizFinish,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"resumePlayers":TDV.Tour.Script.resumePlayers,"initAnalytics":TDV.Tour.Script.initAnalytics,"showWindow":TDV.Tour.Script.showWindow,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"mixObject":TDV.Tour.Script.mixObject,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"createTween":TDV.Tour.Script.createTween,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"historyGoBack":TDV.Tour.Script.historyGoBack,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"initQuiz":TDV.Tour.Script.initQuiz,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"existsKey":TDV.Tour.Script.existsKey,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"startMeasurement":TDV.Tour.Script.startMeasurement,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"toggleVR":TDV.Tour.Script.toggleVR,"showPopupImage":TDV.Tour.Script.showPopupImage,"getOverlays":TDV.Tour.Script.getOverlays,"textToSpeech":TDV.Tour.Script.textToSpeech,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"translate":TDV.Tour.Script.translate,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setLocale":TDV.Tour.Script.setLocale,"disableVR":TDV.Tour.Script.disableVR,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizShowScore":TDV.Tour.Script.quizShowScore},"scrollBarColor":"#000000","hash": "646ed99b1129667d04dc74f6415f52effb31d10959e166ea1ba2b74b14fccdca", "definitions": [{"viewerArea":"this.MainViewer","displayPlayOverlay":true,"class":"VideoPlayer","id":"MainViewerVideoPlayer","clickAction":"play_pause","displayPlaybackBar":true},{"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowVerticalLength":0,"playbackBarHeadWidth":6,"progressBottom":10,"playbackBarProgressBorderRadius":0,"playbackBarProgressBorderSize":0,"toolTipPaddingTop":4,"progressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","progressHeight":2,"vrThumbstickRotationStep":20,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontSize":"1.11vmin","data":{"name":"Main Viewer"},"progressBarBorderRadius":2,"subtitlesBottom":50,"progressBarBorderSize":0,"playbackBarHeadShadowOpacity":0.7,"toolTipShadowColor":"#333138","playbackBarProgressBackgroundColorRatios":[0],"progressBorderRadius":2,"playbackBarBorderColor":"#FFFFFF","toolTipPaddingRight":6,"progressLeft":"33%","playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"toolTipFontColor":"#606060","firstTransitionDuration":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowHorizontalLength":0,"toolTipTextShadowColor":"#000000","subtitlesTop":0,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"playbackBarBorderSize":0,"toolTipPaddingLeft":6,"subtitlesBorderColor":"#FFFFFF","vrPointerColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowVerticalLength":1,"vrPointerSelectionColor":"#FF6600","toolTipFontFamily":"Arial","subtitlesFontFamily":"Arial","playbackBarBackgroundOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"id":"MainViewer","playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"vrPointerSelectionTime":2000,"playbackBarHeadBorderSize":0,"progressBackgroundColorRatios":[0],"playbackBarHeadShadow":true,"class":"ViewerArea","subtitlesGap":0,"minHeight":50,"progressOpacity":0.7,"subtitlesBackgroundColor":"#000000","progressRight":"33%","minWidth":100,"toolTipBorderColor":"#767676","progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"height":"100%","propagateClick":false,"subtitlesFontColor":"#FFFFFF","progressBorderColor":"#000000","toolTipPaddingBottom":4,"progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"width":"100%","playbackBarHeight":10,"progressBackgroundColor":["#000000"]},{"class":"Video","data":{"label":"V_Intro_Auxiliar_DAR"},"thumbnailUrl":"media/video_28151151_26F9_5012_41BC_650F00665F53_t.webp","id":"video_28151151_26F9_5012_41BC_650F00665F53","width":1280,"video":"this.videores_34517878_270F_7011_41C1_DD6BCC90DE81","height":720,"label":trans('video_28151151_26F9_5012_41BC_650F00665F53.label')},{"viewerArea":"this.MainViewer","class":"PanoramaPlayer","buttonCardboardView":["this.IconButton_3F27B1F5_2C09_4364_41B8_4B79F39FA3FA"],"arrowKeysAction":"translate","touchControlMode":"drag_rotation","displayPlaybackBar":true,"aaEnabled":true,"keepModel3DLoadedWithoutLocation":true,"id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation"},{"enterPointingToHorizon":true,"class":"RotationalCamera","id":"media_3C2966A0_2908_D031_41C1_4189631F518A_camera","initialPosition":{"pitch":-4.32,"hfov":120,"class":"RotationalCameraPosition","yaw":49.63}},{"backgroundOpacity":0,"horizontalAlign":"center","id":"IconButton_3F27B1F5_2C09_4364_41B8_4B79F39FA3FA","data":{"name":"IconButton3682","visibleIfCardboardAvailable":true},"right":"4.69%","maxHeight":23,"maxWidth":35,"class":"IconButton","minHeight":1,"minWidth":1,"verticalAlign":"middle","bottom":"10.25%","iconURL":"skin/IconButton_3F27B1F5_2C09_4364_41B8_4B79F39FA3FA.png","propagateClick":false,"width":35,"height":23},{"autoplay":true,"data":{"label":"10-Embalagem"},"audio":"this.audiores_3E3296D3_2919_D017_4195_5D5E59685A0C","id":"audio_3D3A6C13_2919_5017_416B_32AF89D49AAB","class":"MediaAudio"},{"class":"Video360","hfov":360,"vfov":180,"id":"media_3C2966A0_2908_D031_41C1_4189631F518A","video":["this.videores_3D652097_291F_701E_41C2_50B0E6C5AFFE","this.videores_3D771850_2C18_C0BC_4192_55A7A38AF1D8"],"pitch":0,"hfovMin":60,"data":{"label":"10_embalagem_2"},"overlays":["this.overlay_3D9BBB35_290B_3013_41C1_0BD0E31FEF7E","this.overlay_3C29AF30_2C0B_40FC_41C3_C6A8228C0238"],"hfovMax":140,"thumbnailUrl":"media/media_3C2966A0_2908_D031_41C1_4189631F518A_t.webp","label":trans('media_3C2966A0_2908_D031_41C1_4189631F518A.label')},{"class":"Video","data":{"label":"5 min lia"},"thumbnailUrl":"media/video_3BFDD9C7_290F_307F_41A2_17C6D3877C1F_t.webp","id":"video_3BFDD9C7_290F_307F_41A2_17C6D3877C1F","width":3840,"video":"this.videores_3D872B79_291F_3013_4194_72A8EE802C2F","chromaThreshold":0.07,"height":2160,"chromaColor":"#F068BF","chromaSmoothing":0.05,"label":trans('video_3BFDD9C7_290F_307F_41A2_17C6D3877C1F.label')},{"enterPointingToHorizon":true,"class":"PanoramaCamera","id":"panorama_3E6A6EF4_2C3F_4164_41A9_601E795AC62D_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"initialSequence":"this.sequence_3C716117_2C39_40A4_41BA_DF34E8A5934F"},{"id":"mainPlayList","items":[{"camera":"this.panorama_3E6A6EF4_2C3F_4164_41A9_601E795AC62D_camera","media":"this.panorama_3E6A6EF4_2C3F_4164_41A9_601E795AC62D","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},"this.Video360PlayListItem_388B8EBB_2C08_C1ED_41C0_F88B2C34E93B",{"media":"this.video_3BFDD9C7_290F_307F_41A2_17C6D3877C1F","class":"VideoPlayListItem","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 2, '#000000'); this.changeOpacityWhilePlay(this.mainPlayList, 2, '0'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 2)","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)","player":"this.MainViewerVideoPlayer"},{"media":"this.video_28151151_26F9_5012_41BC_650F00665F53","class":"VideoPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 0)","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 3, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 3)"}],"class":"PlayList"},{"class":"Panorama","hfov":360,"vfov":180,"id":"panorama_3E6A6EF4_2C3F_4164_41A9_601E795AC62D","frames":[{"cube":{"levels":[{"rowCount":4,"height":2048,"url":"media/panorama_3E6A6EF4_2C3F_4164_41A9_601E795AC62D_0/{face}/0/{row}_{column}.webp","colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","width":12288},{"rowCount":2,"height":1024,"url":"media/panorama_3E6A6EF4_2C3F_4164_41A9_601E795AC62D_0/{face}/1/{row}_{column}.webp","colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_3E6A6EF4_2C3F_4164_41A9_601E795AC62D_0/{face}/2/{row}_{column}.webp","colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","width":3072}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_3E6A6EF4_2C3F_4164_41A9_601E795AC62D_t.webp"}],"thumbnailUrl":"media/panorama_3E6A6EF4_2C3F_4164_41A9_601E795AC62D_t.webp","hfovMin":"135%","overlays":["this.overlay_3DE56EA9_2C3F_C1ED_41A0_1BBB362C6C4B"],"data":{"label":"Cinama2"},"label":trans('panorama_3E6A6EF4_2C3F_4164_41A9_601E795AC62D.label'),"hfovMax":130},{"id":"videores_34517878_270F_7011_41C1_DD6BCC90DE81","height":642,"levels":["this.videolevel_3D6FB4EB_2C18_C16C_41B0_EF262B607C4D","this.videolevel_3EC7FAD8_2C39_41AC_41AA_58C5C0A66E2C"],"class":"VideoResource","width":1140},{"id":"audiores_3E3296D3_2919_D017_4195_5D5E59685A0C","class":"AudioResource","mp3Url":trans('audiores_3E3296D3_2919_D017_4195_5D5E59685A0C.mp3Url')},{"height":1920,"codec":"h264","class":"Video360Resource","bitrate":17677,"framerate":29.97,"type":"video/mp4","url":trans('videores_3D652097_291F_701E_41C2_50B0E6C5AFFE.url'),"id":"videores_3D652097_291F_701E_41C2_50B0E6C5AFFE","posterURL":trans('videores_3D652097_291F_701E_41C2_50B0E6C5AFFE.posterURL'),"width":3840},{"gain":0,"height":3840,"framerate":29.97,"class":"Video360Resource","bitrate":12227,"type":"application/x-mpegurl","url":trans('videores_3D771850_2C18_C0BC_4192_55A7A38AF1D8.url'),"id":"videores_3D771850_2C18_C0BC_4192_55A7A38AF1D8","posterURL":trans('videores_3D771850_2C18_C0BC_4192_55A7A38AF1D8.posterURL'),"width":7680},{"distance":50,"blending":0.09,"class":"QuadVideoPanoramaOverlay","vertices":[{"pitch":10.05,"class":"PanoramaPoint","yaw":60.54},{"pitch":9.49,"class":"PanoramaPoint","yaw":137.62},{"pitch":-32.22,"class":"PanoramaPoint","yaw":139.88},{"pitch":-32.7,"class":"PanoramaPoint","yaw":59.79}],"playbackPositions":[{"vertices":[{"pitch":10.05,"class":"PanoramaPoint","yaw":60.54},{"pitch":9.49,"class":"PanoramaPoint","yaw":137.62},{"pitch":-32.22,"class":"PanoramaPoint","yaw":139.88},{"pitch":-32.7,"class":"PanoramaPoint","yaw":59.79}],"class":"QuadPanoramaOverlayPlaybackPosition","timestamp":0}],"useHandCursor":true,"id":"overlay_3D9BBB35_290B_3013_41C1_0BD0E31FEF7E","image":"this.res_3D6F6DF4_291F_5011_41C0_9E0B335B7653","chromaColor":"#F068BF","videoVisibleOnStop":true,"video":"this.videores_3D872B79_291F_3013_4194_72A8EE802C2F","data":{"hasAudio":false,"label":"Video"},"cues":[],"chromaThreshold":0.07,"chromaSmoothing":0.05,"autoplay":true},{"class":"HotspotPanoramaOverlay","data":{"label":"10_etiqueta"},"maps":[],"items":[{"pitch":-1.46,"distance":50,"class":"HotspotPanoramaOverlayImage","hfov":105.94,"yaw":154.08,"opacity":0,"data":{"label":"10_etiqueta"},"vfov":55.16,"scaleMode":"fit_inside","image":"this.res_3D5ABF8C_2C18_BFA4_41C3_9E930708E229","playbackPositions":[{"pitch":-1.46,"vfov":55.16,"class":"PanoramaOverlayPlaybackPosition","timestamp":0,"hfov":105.94,"yaw":154.08,"opacity":0},{"pitch":-1.46,"vfov":55.16,"class":"PanoramaOverlayPlaybackPosition","timestamp":16.68,"hfov":105.94,"yaw":154.08,"opacity":0},{"pitch":-1.46,"vfov":55.16,"class":"PanoramaOverlayPlaybackPosition","timestamp":16.68,"hfov":105.94,"yaw":154.08},{"pitch":-1.46,"vfov":55.16,"class":"PanoramaOverlayPlaybackPosition","timestamp":21.51,"hfov":105.94,"yaw":154.08,"opacity":0.96},{"pitch":-1.46,"vfov":55.16,"class":"PanoramaOverlayPlaybackPosition","timestamp":22.02,"hfov":105.94,"yaw":154.08,"opacity":0}]}],"enabledInVR":true,"useHandCursor":true,"id":"overlay_3C29AF30_2C0B_40FC_41C3_C6A8228C0238","areas":["this.HotspotPanoramaOverlayArea_23AF9F96_2C0B_5FA4_41B2_3123B98E5BE6"]},{"gain":0,"height":642,"levels":["this.videolevel_3D81FB7D_291F_3013_41B0_DC5339CA9393"],"class":"VideoResource","id":"videores_3D872B79_291F_3013_4194_72A8EE802C2F","hasAudio":false,"width":1140},{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_3C716117_2C39_40A4_41BA_DF34E8A5934F"},{"camera":"this.media_3C2966A0_2908_D031_41C1_4189631F518A_camera","media":"this.media_3C2966A0_2908_D031_41C1_4189631F518A","class":"Video360PlayListItem","player":"this.MainViewerPanoramaPlayer","id":"Video360PlayListItem_388B8EBB_2C08_C1ED_41C0_F88B2C34E93B","begin":"this.executeAudioAction([this.audio_3D3A6C13_2919_5017_416B_32AF89D49AAB],'play',this.media_3C2966A0_2908_D031_41C1_4189631F518A,true,true,false); this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.MainViewerPanoramaPlayer.set('displayPlayOverlay', false); this.MainViewerPanoramaPlayer.set('clickAction', 'none'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1)"},{"autoplay":true,"cues":[],"distance":50,"class":"QuadVideoPanoramaOverlay","end":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.Video360PlayListItem_388B8EBB_2C08_C1ED_41C0_F88B2C34E93B, 84.18461538461538, -3.6, 120 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1); this.MainViewerPanoramaPlayer.play()","vertices":[{"pitch":17.13,"class":"PanoramaPoint","yaw":-35.05},{"pitch":17.82,"class":"PanoramaPoint","yaw":31.16},{"pitch":-8.49,"class":"PanoramaPoint","yaw":30.86},{"pitch":-8.01,"class":"PanoramaPoint","yaw":-34.7}],"stateChange":"if(this.overlay_3DE56EA9_2C3F_C1ED_41A0_1BBB362C6C4B.get('state') == 'playing'){ this.pauseGlobalAudios([this.overlay_3DE56EA9_2C3F_C1ED_41A0_1BBB362C6C4B], true); } else { this.resumeGlobalAudios(); }","image":"this.res_3EB41C92_2C39_41BC_41AB_F9BED247E5C1","useHandCursor":true,"id":"overlay_3DE56EA9_2C3F_C1ED_41A0_1BBB362C6C4B","data":{"label":"Video"},"video":"this.videores_34517878_270F_7011_41C1_DD6BCC90DE81"},{"height":720,"url":trans('videolevel_3D6FB4EB_2C18_C16C_41B0_EF262B607C4D.url'),"framerate":29.97,"class":"VideoResourceLevel","bitrate":2071,"id":"videolevel_3D6FB4EB_2C18_C16C_41B0_EF262B607C4D","type":"application/x-mpegurl","posterURL":trans('videolevel_3D6FB4EB_2C18_C16C_41B0_EF262B607C4D.posterURL'),"width":1280},{"height":642,"codec":"h264","class":"VideoResourceLevel","bitrate":1645,"framerate":29.97,"type":"video/mp4","url":trans('videolevel_3EC7FAD8_2C39_41AC_41AA_58C5C0A66E2C.url'),"id":"videolevel_3EC7FAD8_2C39_41AC_41AA_58C5C0A66E2C","posterURL":trans('videolevel_3EC7FAD8_2C39_41AC_41AA_58C5C0A66E2C.posterURL'),"width":1140},{"id":"res_3D6F6DF4_291F_5011_41C0_9E0B335B7653","levels":[{"height":1280,"url":"media/res_3D6F6DF4_291F_5011_41C0_9E0B335B7653_0.webp","class":"ImageResourceLevel","width":1280}],"class":"ImageResource"},{"id":"res_3D5ABF8C_2C18_BFA4_41C3_9E930708E229","levels":[{"height":1802,"url":"media/res_3D5ABF8C_2C18_BFA4_41C3_9E930708E229_0.webp","class":"ImageResourceLevel","width":2393}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_23AF9F96_2C0B_5FA4_41B2_3123B98E5BE6","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"height":642,"codec":"h264","class":"VideoResourceLevel","bitrate":1646,"framerate":30,"type":"video/mp4","url":trans('videolevel_3D81FB7D_291F_3013_41B0_DC5339CA9393.url'),"id":"videolevel_3D81FB7D_291F_3013_41B0_DC5339CA9393","posterURL":trans('videolevel_3D81FB7D_291F_3013_41B0_DC5339CA9393.posterURL'),"width":1140},{"id":"res_3EB41C92_2C39_41BC_41AB_F9BED247E5C1","levels":[{"height":720,"url":"media/res_3EB41C92_2C39_41BC_41AB_F9BED247E5C1_0.webp","class":"ImageResourceLevel","width":1280}],"class":"ImageResource"}],"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_3F27B1F5_2C09_4364_41B8_4B79F39FA3FA], 'cardboardAvailable')","id":"rootPlayer","data":{"locales":{"pt":"locale/pt.txt"},"name":"Player681","textToSpeechConfig":{"pitch":1,"volume":1,"rate":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"speechOnQuizQuestion":false},"displayTooltipInTouchScreens":true,"defaultLocale":"pt","history":{}},"scrollBarMargin":2,"backgroundColor":["#FFFFFF"],"layout":"absolute","backgroundColorRatios":[0],"width":"100%","watermark":false,"class":"Player","minHeight":0,"minWidth":0,"gap":10,"propagateClick":false,"height":"100%","defaultMenu":["fullscreen","mute","rotation"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.0.9, Fri May 15 2026