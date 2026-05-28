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
var script = {"children":["this.MainViewer"],"scripts":{"cloneBindings":TDV.Tour.Script.cloneBindings,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"unloadViewer":TDV.Tour.Script.unloadViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"clone":TDV.Tour.Script.clone,"shareSocial":TDV.Tour.Script.shareSocial,"historyGoBack":TDV.Tour.Script.historyGoBack,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getMainViewer":TDV.Tour.Script.getMainViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setValue":TDV.Tour.Script.setValue,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getKey":TDV.Tour.Script.getKey,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPixels":TDV.Tour.Script.getPixels,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"initQuiz":TDV.Tour.Script.initQuiz,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"initAnalytics":TDV.Tour.Script.initAnalytics,"openLink":TDV.Tour.Script.openLink,"quizStart":TDV.Tour.Script.quizStart,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setMapLocation":TDV.Tour.Script.setMapLocation,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"toggleVR":TDV.Tour.Script.toggleVR,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"init":TDV.Tour.Script.init,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"registerKey":TDV.Tour.Script.registerKey,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"executeJS":TDV.Tour.Script.executeJS,"playAudioList":TDV.Tour.Script.playAudioList,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"enableVR":TDV.Tour.Script.enableVR,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getComponentByName":TDV.Tour.Script.getComponentByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"quizFinish":TDV.Tour.Script.quizFinish,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"downloadFile":TDV.Tour.Script.downloadFile,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"mixObject":TDV.Tour.Script.mixObject,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"showWindowBase":TDV.Tour.Script.showWindowBase,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"createTween":TDV.Tour.Script.createTween,"disableVR":TDV.Tour.Script.disableVR,"textToSpeech":TDV.Tour.Script.textToSpeech,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"isPanorama":TDV.Tour.Script.isPanorama,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"showWindow":TDV.Tour.Script.showWindow,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"startMeasurement":TDV.Tour.Script.startMeasurement,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizShowScore":TDV.Tour.Script.quizShowScore,"historyGoForward":TDV.Tour.Script.historyGoForward,"translate":TDV.Tour.Script.translate,"existsKey":TDV.Tour.Script.existsKey,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"unregisterKey":TDV.Tour.Script.unregisterKey,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"showPopupImage":TDV.Tour.Script.showPopupImage,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getOverlays":TDV.Tour.Script.getOverlays,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"setLocale":TDV.Tour.Script.setLocale},"scrollBarColor":"#000000","hash": "6d47c6d095477b50d5e57b02d596e2be1ac7b09f87ec1ae1e7787fab813b9e40", "definitions": [{"class":"Video","data":{"label":"V_1_Intro2D_DAR"},"thumbnailUrl":"media/video_7D2C6014_6F62_8C80_41D3_E741B17FC666_t.webp","id":"video_7D2C6014_6F62_8C80_41D3_E741B17FC666","width":1280,"video":"this.videores_7DB714D6_6F66_B583_41C5_A2080E9CD39C","height":720,"label":trans('video_7D2C6014_6F62_8C80_41D3_E741B17FC666.label')},{"viewerArea":"this.MainViewer","displayPlayOverlay":true,"class":"VideoPlayer","id":"MainViewerVideoPlayer","clickAction":"play_pause","displayPlaybackBar":true},{"class":"Video360","hfov":360,"vfov":180,"id":"media_7ED69393_6F6E_B380_41C2_50083F143EC4","video":["this.videores_7DDC9FDD_6F67_F380_41AE_E358F0E4A338","this.videores_7C706B4F_6FE6_9C80_41D2_3201B5EE5A1B"],"pitch":0,"hfovMin":60,"data":{"label":"V_2_separado_DAR"},"overlays":["this.overlay_7DD06531_6F6E_9481_41BF_8DEE1D335717","this.overlay_7B4DCA71_6F23_9C80_41C1_83F58FB1A280","this.overlay_7B9D0F74_6FDE_9480_41D3_C3C88D91DE41"],"hfovMax":140,"thumbnailUrl":"media/media_7ED69393_6F6E_B380_41C2_50083F143EC4_t.webp","label":trans('media_7ED69393_6F6E_B380_41C2_50083F143EC4.label')},{"id":"playList_7CEE82D9_6FE1_8D81_41D9_2FDFB93B310D","items":[{"media":"this.video_7D2C6014_6F62_8C80_41D3_E741B17FC666","class":"VideoPlayListItem","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_7CEE82D9_6FE1_8D81_41D9_2FDFB93B310D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7CEE82D9_6FE1_8D81_41D9_2FDFB93B310D, 0)","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","player":"this.MainViewerVideoPlayer"}],"class":"PlayList"},{"viewerArea":"this.MainViewer","class":"PanoramaPlayer","arrowKeysAction":"translate","touchControlMode":"drag_rotation","aaEnabled":true,"mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"keepModel3DLoadedWithoutLocation":true},{"class":"Video360","hfov":360,"vfov":180,"id":"media_61FFAEA0_6F27_95BF_41D4_BD628E01F935","video":["this.videores_7D802790_6F3E_F39F_41B8_62EF87871E10","this.videores_7C1F4F79_6FE1_F480_41CD_C0C4BCEA6DFA"],"pitch":0,"hfovMin":60,"data":{"label":"V_1_separado_DAR"},"overlays":["this.overlay_7C6D46A7_6F63_9580_41D8_7A68C6E02C49","this.overlay_7C64F288_6F61_8D80_41D2_79B91C381FA3"],"hfovMax":140,"thumbnailUrl":"media/media_61FFAEA0_6F27_95BF_41D4_BD628E01F935_t.webp","label":trans('media_61FFAEA0_6F27_95BF_41D4_BD628E01F935.label')},{"enterPointingToHorizon":true,"class":"RotationalCamera","id":"media_61FFAEA0_6F27_95BF_41D4_BD628E01F935_camera","initialPosition":{"pitch":0,"hfov":120,"class":"RotationalCameraPosition","yaw":0}},{"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowVerticalLength":0,"playbackBarHeadWidth":6,"progressBottom":10,"playbackBarProgressBorderRadius":0,"playbackBarProgressBorderSize":0,"toolTipPaddingTop":4,"progressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","progressHeight":2,"vrThumbstickRotationStep":20,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontSize":"1.11vmin","data":{"name":"Main Viewer"},"progressBarBorderRadius":2,"subtitlesBottom":50,"progressBarBorderSize":0,"playbackBarHeadShadowOpacity":0.7,"toolTipShadowColor":"#333138","playbackBarProgressBackgroundColorRatios":[0],"progressBorderRadius":2,"playbackBarBorderColor":"#FFFFFF","toolTipPaddingRight":6,"progressLeft":"33%","playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"toolTipFontColor":"#606060","firstTransitionDuration":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowHorizontalLength":0,"toolTipTextShadowColor":"#000000","subtitlesTop":0,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"playbackBarBorderSize":0,"toolTipPaddingLeft":6,"subtitlesBorderColor":"#FFFFFF","vrPointerColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowVerticalLength":1,"vrPointerSelectionColor":"#FF6600","toolTipFontFamily":"Arial","subtitlesFontFamily":"Arial","playbackBarBackgroundOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"id":"MainViewer","playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"vrPointerSelectionTime":2000,"playbackBarHeadBorderSize":0,"progressBackgroundColorRatios":[0],"playbackBarHeadShadow":true,"class":"ViewerArea","subtitlesGap":0,"minHeight":50,"progressOpacity":0.7,"subtitlesBackgroundColor":"#000000","progressRight":"33%","minWidth":100,"toolTipBorderColor":"#767676","progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"height":"100%","propagateClick":false,"subtitlesFontColor":"#FFFFFF","progressBorderColor":"#000000","toolTipPaddingBottom":4,"progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"width":"100%","playbackBarHeight":10,"progressBackgroundColor":["#000000"]},{"id":"mainPlayList","items":[{"camera":"this.media_7ED69393_6F6E_B380_41C2_50083F143EC4_camera","media":"this.media_7ED69393_6F6E_B380_41C2_50083F143EC4","class":"Video360PlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.MainViewerPanoramaPlayer.set('displayPlayOverlay', false); this.MainViewerPanoramaPlayer.set('clickAction', 'none'); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)"},{"camera":"this.media_61FFAEA0_6F27_95BF_41D4_BD628E01F935_camera","media":"this.media_61FFAEA0_6F27_95BF_41D4_BD628E01F935","class":"Video360PlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 0)","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.MainViewerPanoramaPlayer.set('displayPlayOverlay', false); this.MainViewerPanoramaPlayer.set('clickAction', 'none'); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1)"}],"class":"PlayList"},{"id":"playList_7CEE92D9_6FE1_8D81_41D4_CCE76FAA27A8","items":[{"media":"this.video_60CFA981_6F21_9F80_41B6_19216CCCF5CF","class":"VideoPlayListItem","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_7CEE92D9_6FE1_8D81_41D4_CCE76FAA27A8, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_7CEE92D9_6FE1_8D81_41D4_CCE76FAA27A8, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7CEE92D9_6FE1_8D81_41D4_CCE76FAA27A8, 0)","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","player":"this.MainViewerVideoPlayer"}],"class":"PlayList"},{"class":"Video","data":{"label":"5 min lia"},"thumbnailUrl":"media/video_60CFA981_6F21_9F80_41B6_19216CCCF5CF_t.webp","id":"video_60CFA981_6F21_9F80_41B6_19216CCCF5CF","width":3840,"video":"this.videores_7EE96C25_6F21_7480_41A4_704D76A48FA2","chromaThreshold":0.09,"height":2160,"chromaColor":"#F068BF","chromaSmoothing":0.04,"label":trans('video_60CFA981_6F21_9F80_41B6_19216CCCF5CF.label')},{"enterPointingToHorizon":true,"class":"RotationalCamera","id":"media_7ED69393_6F6E_B380_41C2_50083F143EC4_camera","initialPosition":{"pitch":-2.61,"hfov":120,"class":"RotationalCameraPosition","yaw":-40.46}},{"id":"videores_7DB714D6_6F66_B583_41C5_A2080E9CD39C","height":642,"levels":["this.videolevel_7DB724D9_6F66_B580_41D8_11120F8AA4BD"],"class":"VideoResource","width":1140},{"height":1920,"codec":"h264","class":"Video360Resource","bitrate":17677,"framerate":29.97,"type":"video/mp4","url":trans('videores_7DDC9FDD_6F67_F380_41AE_E358F0E4A338.url'),"id":"videores_7DDC9FDD_6F67_F380_41AE_E358F0E4A338","posterURL":trans('videores_7DDC9FDD_6F67_F380_41AE_E358F0E4A338.posterURL'),"width":3840},{"height":3840,"framerate":29.97,"class":"Video360Resource","bitrate":19999,"type":"application/x-mpegurl","url":trans('videores_7C706B4F_6FE6_9C80_41D2_3201B5EE5A1B.url'),"id":"videores_7C706B4F_6FE6_9C80_41D2_3201B5EE5A1B","posterURL":trans('videores_7C706B4F_6FE6_9C80_41D2_3201B5EE5A1B.posterURL'),"width":7680},{"distance":50,"class":"VideoPanoramaOverlay","hfov":61.53,"playbackPositions":[{"pitch":-16.55,"vfov":46.33,"rotationY":10.66,"class":"PanoramaOverlayPlaybackPosition","timestamp":0,"rotationX":16.3,"roll":1.38,"hfov":61.53,"yaw":-29.5}],"useHandCursor":true,"id":"overlay_7DD06531_6F6E_9481_41BF_8DEE1D335717","image":"this.res_7DAFC51B_6F3E_F480_41A9_748E0C55B99F","chromaColor":"#F068BF","video":"this.videores_7EE96C25_6F21_7480_41A4_704D76A48FA2","data":{"hasAudio":false,"label":"Video"},"cues":[],"roll":1.38,"vfov":46.33,"yaw":-29.5,"pitch":-16.55,"chromaThreshold":0.09,"rotationX":16.3,"chromaSmoothing":0.04,"rotationY":10.66,"autoplay":true},{"class":"HotspotPanoramaOverlay","data":{"label":"Popup_CaliBeni_DAR"},"maps":[],"items":[{"pitch":2.45,"distance":50,"playbackPositions":[{"pitch":-1.99,"vfov":26.48,"rotationY":-12.65,"class":"PanoramaOverlayPlaybackPosition","timestamp":0,"rotationX":-1.15,"roll":-1.19,"hfov":60.37,"yaw":-65.11,"opacity":0},{"pitch":-1.99,"vfov":26.48,"rotationY":-12.65,"class":"PanoramaOverlayPlaybackPosition","timestamp":19.32,"rotationX":-1.15,"roll":-1.19,"hfov":60.37,"yaw":-65.11,"opacity":0},{"pitch":-1.99,"vfov":26.48,"rotationY":-12.65,"class":"PanoramaOverlayPlaybackPosition","timestamp":19.32,"rotationX":-1.15,"roll":-1.19,"hfov":60.37,"yaw":-65.11,"opacity":0},{"pitch":2.45,"vfov":26.48,"rotationY":-12.65,"class":"PanoramaOverlayPlaybackPosition","timestamp":19.94,"rotationX":-1.15,"roll":-1.19,"hfov":60.37,"yaw":-64.75},{"pitch":2.45,"vfov":26.48,"rotationY":-12.65,"class":"PanoramaOverlayPlaybackPosition","timestamp":21.61,"rotationX":-1.15,"roll":-1.19,"hfov":60.37,"yaw":-64.75},{"pitch":2.45,"vfov":26.48,"rotationY":-12.65,"class":"PanoramaOverlayPlaybackPosition","timestamp":22.22,"rotationX":-1.15,"roll":-1.19,"hfov":60.37,"yaw":-64.75,"opacity":0}],"class":"HotspotPanoramaOverlayImage","hfov":60.37,"yaw":-64.75,"opacity":0,"data":{"label":"Popup_CaliBeni_DAR"},"vfov":26.48,"rotationY":-12.65,"rotationX":-1.15,"image":"this.res_7B18EC1A_6F26_B480_41D0_BCB903574AE0","roll":-1.19,"scaleMode":"fit_inside"}],"enabledInVR":true,"useHandCursor":true,"id":"overlay_7B4DCA71_6F23_9C80_41C1_83F58FB1A280","areas":["this.HotspotPanoramaOverlayArea_7B564A7E_6F23_9C80_41D2_45A05778E3B8"]},{"class":"HotspotPanoramaOverlay","data":{"label":"Popup_Regras_DAR"},"maps":[],"items":[{"pitch":-1.83,"distance":50,"playbackPositions":[{"pitch":-0.62,"vfov":73.05,"rotationY":0.73,"class":"PanoramaOverlayPlaybackPosition","timestamp":0,"roll":-89.66,"hfov":69.48,"yaw":-63.76,"opacity":0},{"pitch":-0.62,"vfov":73.05,"rotationY":0.73,"class":"PanoramaOverlayPlaybackPosition","timestamp":26.11,"roll":-89.66,"hfov":69.48,"yaw":-63.76,"opacity":0},{"pitch":-0.62,"vfov":73.05,"rotationY":0.73,"class":"PanoramaOverlayPlaybackPosition","timestamp":26.11,"roll":-89.66,"hfov":69.48,"yaw":-63.76,"opacity":0},{"pitch":-1.83,"vfov":73.05,"rotationY":0.73,"class":"PanoramaOverlayPlaybackPosition","timestamp":27.11,"roll":-89.66,"hfov":69.48,"yaw":-63.57},{"pitch":-1.83,"vfov":73.05,"rotationY":0.73,"class":"PanoramaOverlayPlaybackPosition","timestamp":32.87,"roll":-89.66,"hfov":69.48,"yaw":-63.57},{"pitch":-1.83,"vfov":73.05,"rotationY":0.73,"class":"PanoramaOverlayPlaybackPosition","timestamp":33.36,"roll":-89.66,"hfov":69.48,"yaw":-63.57,"opacity":0}],"class":"HotspotPanoramaOverlayImage","hfov":69.48,"yaw":-63.57,"opacity":0,"data":{"label":"Popup_Regras_DAR"},"vfov":73.05,"rotationY":0.73,"image":"this.res_7C617AE3_6FDE_9D80_41D4_79E2BB5CA08E","roll":-89.66,"scaleMode":"fit_inside"}],"enabledInVR":true,"useHandCursor":true,"id":"overlay_7B9D0F74_6FDE_9480_41D3_C3C88D91DE41","areas":["this.HotspotPanoramaOverlayArea_7CBACFAE_6FDE_9380_41C1_95E566E31051"]},{"height":1920,"codec":"h264","class":"Video360Resource","bitrate":17677,"framerate":29.97,"type":"video/mp4","url":trans('videores_7D802790_6F3E_F39F_41B8_62EF87871E10.url'),"id":"videores_7D802790_6F3E_F39F_41B8_62EF87871E10","posterURL":trans('videores_7D802790_6F3E_F39F_41B8_62EF87871E10.posterURL'),"width":3840},{"height":3840,"framerate":29.97,"class":"Video360Resource","bitrate":20078,"type":"application/x-mpegurl","url":trans('videores_7C1F4F79_6FE1_F480_41CD_C0C4BCEA6DFA.url'),"id":"videores_7C1F4F79_6FE1_F480_41CD_C0C4BCEA6DFA","posterURL":trans('videores_7C1F4F79_6FE1_F480_41CD_C0C4BCEA6DFA.posterURL'),"width":7680},{"distance":50,"class":"VideoPanoramaOverlay","hfov":54.26,"vfov":36.76,"useHandCursor":true,"id":"overlay_7C6D46A7_6F63_9580_41D8_7A68C6E02C49","image":"this.res_7DAFC51B_6F3E_F480_41A9_748E0C55B99F","chromaColor":"#F068BF","video":"this.videores_7EE96C25_6F21_7480_41A4_704D76A48FA2","data":{"hasAudio":false,"label":"Video"},"cues":[],"playbackPositions":[{"pitch":-9.41,"vfov":36.76,"class":"PanoramaOverlayPlaybackPosition","timestamp":0,"rotationX":11.39,"hfov":54.26,"yaw":17.23,"opacity":0},{"pitch":-9.41,"vfov":36.76,"class":"PanoramaOverlayPlaybackPosition","timestamp":0.96,"rotationX":11.39,"hfov":54.26,"yaw":17.23,"opacity":0},{"pitch":-9.41,"vfov":36.76,"class":"PanoramaOverlayPlaybackPosition","timestamp":0.96,"rotationX":11.39,"hfov":54.26,"yaw":17.23}],"pitch":-9.41,"chromaThreshold":0.09,"yaw":17.23,"rotationX":11.39,"chromaSmoothing":0.04,"autoplay":true},{"distance":50,"class":"VideoPanoramaOverlay","hfov":42.37,"vfov":24.39,"useHandCursor":true,"id":"overlay_7C64F288_6F61_8D80_41D2_79B91C381FA3","image":"this.res_7CFF67F5_6F5F_7380_4191_37C6B3532ED6","video":"this.videores_7DB714D6_6F66_B583_41C5_A2080E9CD39C","pitch":1.43,"cues":[],"playbackPositions":[{"pitch":1.43,"vfov":24.39,"rotationY":15.15,"class":"PanoramaOverlayPlaybackPosition","timestamp":0,"rotationX":-1.77,"hfov":42.37,"yaw":51.1,"opacity":0},{"pitch":1.43,"vfov":24.39,"rotationY":15.15,"class":"PanoramaOverlayPlaybackPosition","timestamp":0.96,"rotationX":-1.77,"hfov":42.37,"yaw":51.1,"opacity":0},{"pitch":1.43,"vfov":24.39,"rotationY":15.15,"class":"PanoramaOverlayPlaybackPosition","timestamp":0.96,"rotationX":-1.77,"hfov":42.37,"yaw":51.1}],"data":{"label":"Video"},"yaw":51.1,"rotationX":-1.77,"rotationY":15.15,"autoplay":true},{"height":642,"levels":["this.videolevel_7EE90C27_6F21_7480_41D6_72FB271190F9"],"class":"VideoResource","id":"videores_7EE96C25_6F21_7480_41A4_704D76A48FA2","hasAudio":false,"width":1140},{"height":642,"codec":"h264","class":"VideoResourceLevel","bitrate":1645,"framerate":29.97,"type":"video/mp4","url":trans('videolevel_7DB724D9_6F66_B580_41D8_11120F8AA4BD.url'),"id":"videolevel_7DB724D9_6F66_B580_41D8_11120F8AA4BD","posterURL":trans('videolevel_7DB724D9_6F66_B580_41D8_11120F8AA4BD.posterURL'),"width":1140},{"id":"res_7DAFC51B_6F3E_F480_41A9_748E0C55B99F","levels":[{"height":1280,"url":"media/res_7DAFC51B_6F3E_F480_41A9_748E0C55B99F_0.webp","class":"ImageResourceLevel","width":1280}],"class":"ImageResource"},{"id":"res_7B18EC1A_6F26_B480_41D0_BCB903574AE0","levels":[{"height":812,"url":"media/res_7B18EC1A_6F26_B480_41D0_BCB903574AE0_0.webp","class":"ImageResourceLevel","width":1618}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_7B564A7E_6F23_9C80_41D2_45A05778E3B8","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"res_7C617AE3_6FDE_9D80_41D4_79E2BB5CA08E","levels":[{"height":1024,"url":"media/res_7C617AE3_6FDE_9D80_41D4_79E2BB5CA08E_0.webp","class":"ImageResourceLevel","width":2048}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_7CBACFAE_6FDE_9380_41C1_95E566E31051","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"res_7CFF67F5_6F5F_7380_4191_37C6B3532ED6","levels":[{"height":720,"url":"media/res_7CFF67F5_6F5F_7380_4191_37C6B3532ED6_0.webp","class":"ImageResourceLevel","width":1280}],"class":"ImageResource"},{"height":642,"codec":"h264","class":"VideoResourceLevel","bitrate":1646,"framerate":30,"type":"video/mp4","url":trans('videolevel_7EE90C27_6F21_7480_41D6_72FB271190F9.url'),"id":"videolevel_7EE90C27_6F21_7480_41D6_72FB271190F9","posterURL":trans('videolevel_7EE90C27_6F21_7480_41D6_72FB271190F9.posterURL'),"width":1140}],"start":"this.init()","id":"rootPlayer","data":{"displayTooltipInTouchScreens":true,"history":{},"textToSpeechConfig":{"pitch":1,"volume":1,"rate":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"speechOnQuizQuestion":false},"locales":{"pt":"locale/pt.txt"},"defaultLocale":"pt","name":"Player1775"},"scrollBarMargin":2,"backgroundColor":["#FFFFFF"],"layout":"absolute","backgroundColorRatios":[0],"width":"100%","watermark":false,"class":"Player","minHeight":0,"minWidth":0,"gap":10,"propagateClick":false,"height":"100%","defaultMenu":["fullscreen","mute","rotation"]};
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
//Generated with v2026.0.9, Thu May 28 2026