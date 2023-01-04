var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_Ghozza20kmProbabilityScores_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ghozza20kmProbabilityScores",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Ghozza20kmProbabilityScores_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3663175.088214, 3084658.013121, 3708047.874040, 3129629.386104]
                            })
                        });
var format_Ghozza20km3kStrahler_2 = new ol.format.GeoJSON();
var features_Ghozza20km3kStrahler_2 = format_Ghozza20km3kStrahler_2.readFeatures(json_Ghozza20km3kStrahler_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ghozza20km3kStrahler_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ghozza20km3kStrahler_2.addFeatures(features_Ghozza20km3kStrahler_2);
var lyr_Ghozza20km3kStrahler_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ghozza20km3kStrahler_2, 
                style: style_Ghozza20km3kStrahler_2,
                interactive: false,
    title: 'Ghozza20km3kStrahler<br />\
    <img src="styles/legend/Ghozza20km3kStrahler_2_0.png" /> 1 - 2 <br />\
    <img src="styles/legend/Ghozza20km3kStrahler_2_1.png" /> 2 - 3 <br />\
    <img src="styles/legend/Ghozza20km3kStrahler_2_2.png" /> 3 - 4 <br />\
    <img src="styles/legend/Ghozza20km3kStrahler_2_3.png" /> 4 - 5 <br />'
        });
var format_100mCamelNetworkBuffer_3 = new ol.format.GeoJSON();
var features_100mCamelNetworkBuffer_3 = format_100mCamelNetworkBuffer_3.readFeatures(json_100mCamelNetworkBuffer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100mCamelNetworkBuffer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100mCamelNetworkBuffer_3.addFeatures(features_100mCamelNetworkBuffer_3);
var lyr_100mCamelNetworkBuffer_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_100mCamelNetworkBuffer_3, 
                style: style_100mCamelNetworkBuffer_3,
                interactive: false,
                title: '<img src="styles/legend/100mCamelNetworkBuffer_3.png" /> 100mCamelNetworkBuffer'
            });
var format_100mWalkingNetworkBuffer_4 = new ol.format.GeoJSON();
var features_100mWalkingNetworkBuffer_4 = format_100mWalkingNetworkBuffer_4.readFeatures(json_100mWalkingNetworkBuffer_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100mWalkingNetworkBuffer_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100mWalkingNetworkBuffer_4.addFeatures(features_100mWalkingNetworkBuffer_4);
var lyr_100mWalkingNetworkBuffer_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_100mWalkingNetworkBuffer_4, 
                style: style_100mWalkingNetworkBuffer_4,
                interactive: false,
                title: '<img src="styles/legend/100mWalkingNetworkBuffer_4.png" /> 100mWalkingNetworkBuffer'
            });
var format_Ghozza20kmBuffer_5 = new ol.format.GeoJSON();
var features_Ghozza20kmBuffer_5 = format_Ghozza20kmBuffer_5.readFeatures(json_Ghozza20kmBuffer_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ghozza20kmBuffer_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ghozza20kmBuffer_5.addFeatures(features_Ghozza20kmBuffer_5);
var lyr_Ghozza20kmBuffer_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ghozza20kmBuffer_5, 
                style: style_Ghozza20kmBuffer_5,
                interactive: false,
                title: '<img src="styles/legend/Ghozza20kmBuffer_5.png" /> Ghozza20kmBuffer'
            });
var format_GhozzaMAFDOSurveyZones20km_6 = new ol.format.GeoJSON();
var features_GhozzaMAFDOSurveyZones20km_6 = format_GhozzaMAFDOSurveyZones20km_6.readFeatures(json_GhozzaMAFDOSurveyZones20km_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GhozzaMAFDOSurveyZones20km_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GhozzaMAFDOSurveyZones20km_6.addFeatures(features_GhozzaMAFDOSurveyZones20km_6);
var lyr_GhozzaMAFDOSurveyZones20km_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GhozzaMAFDOSurveyZones20km_6, 
                style: style_GhozzaMAFDOSurveyZones20km_6,
                interactive: false,
                title: '<img src="styles/legend/GhozzaMAFDOSurveyZones20km_6.png" /> GhozzaMAFDOSurveyZones20km'
            });
var format_GhozzaSubsites_7 = new ol.format.GeoJSON();
var features_GhozzaSubsites_7 = format_GhozzaSubsites_7.readFeatures(json_GhozzaSubsites_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GhozzaSubsites_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GhozzaSubsites_7.addFeatures(features_GhozzaSubsites_7);
var lyr_GhozzaSubsites_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GhozzaSubsites_7, 
                style: style_GhozzaSubsites_7,
                interactive: false,
                title: '<img src="styles/legend/GhozzaSubsites_7.png" /> GhozzaSubsites'
            });
var format_GhozzaAreaSites_8 = new ol.format.GeoJSON();
var features_GhozzaAreaSites_8 = format_GhozzaAreaSites_8.readFeatures(json_GhozzaAreaSites_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GhozzaAreaSites_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GhozzaAreaSites_8.addFeatures(features_GhozzaAreaSites_8);
var lyr_GhozzaAreaSites_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GhozzaAreaSites_8, 
                style: style_GhozzaAreaSites_8,
                interactive: false,
                title: '<img src="styles/legend/GhozzaAreaSites_8.png" /> GhozzaAreaSites'
            });
var format_2022SurveyPointsNumberedClean_9 = new ol.format.GeoJSON();
var features_2022SurveyPointsNumberedClean_9 = format_2022SurveyPointsNumberedClean_9.readFeatures(json_2022SurveyPointsNumberedClean_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022SurveyPointsNumberedClean_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022SurveyPointsNumberedClean_9.addFeatures(features_2022SurveyPointsNumberedClean_9);
var lyr_2022SurveyPointsNumberedClean_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2022SurveyPointsNumberedClean_9, 
                style: style_2022SurveyPointsNumberedClean_9,
                interactive: false,
                title: '<img src="styles/legend/2022SurveyPointsNumberedClean_9.png" /> 2022SurveyPointsNumberedClean'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Ghozza20kmProbabilityScores_1.setVisible(true);lyr_Ghozza20km3kStrahler_2.setVisible(true);lyr_100mCamelNetworkBuffer_3.setVisible(true);lyr_100mWalkingNetworkBuffer_4.setVisible(true);lyr_Ghozza20kmBuffer_5.setVisible(true);lyr_GhozzaMAFDOSurveyZones20km_6.setVisible(true);lyr_GhozzaSubsites_7.setVisible(true);lyr_GhozzaAreaSites_8.setVisible(true);lyr_2022SurveyPointsNumberedClean_9.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Ghozza20kmProbabilityScores_1,lyr_Ghozza20km3kStrahler_2,lyr_100mCamelNetworkBuffer_3,lyr_100mWalkingNetworkBuffer_4,lyr_Ghozza20kmBuffer_5,lyr_GhozzaMAFDOSurveyZones20km_6,lyr_GhozzaSubsites_7,lyr_GhozzaAreaSites_8,lyr_2022SurveyPointsNumberedClean_9];
lyr_Ghozza20km3kStrahler_2.set('fieldAliases', {'arcid': 'arcid', 'grid_code': 'grid_code', 'from_node': 'from_node', 'to_node': 'to_node', });
lyr_100mCamelNetworkBuffer_3.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'id': 'id', 'cost': 'cost', 'shape_leng': 'shape_leng', 'cost_meter': 'cost_meter', '_mean': '_mean', '_median': '_median', '_stdev': '_stdev', '_min': '_min', '_max': '_max', '_range': '_range', '_Camelmean': '_Camelmean', '_Camelmedi': '_Camelmedi', '_Camelstde': '_Camelstde', '_Camelmin': '_Camelmin', '_Camelmax': '_Camelmax', '_Camelrang': '_Camelrang', });
lyr_100mWalkingNetworkBuffer_4.set('fieldAliases', {'gid': 'gid', 'shape_leng': 'shape_leng', 'speed_kmh': 'speed_kmh', 'time_h': 'time_h', '_mean': '_mean', '_median': '_median', '_stdev': '_stdev', '_min': '_min', '_max': '_max', '_range': '_range', '_Walkingme': '_Walkingme', '_Walking_1': '_Walking_1', '_Walkingst': '_Walkingst', '_Walkingmi': '_Walkingmi', '_Walkingma': '_Walkingma', '_Walkingra': '_Walkingra', });
lyr_Ghozza20kmBuffer_5.set('fieldAliases', {'id': 'id', });
lyr_GhozzaMAFDOSurveyZones20km_6.set('fieldAliases', {'id': 'id', });
lyr_GhozzaSubsites_7.set('fieldAliases', {'index': 'index', 't102_subsi': 't102_subsi', 't102_sub_1': 't102_sub_1', 't102_sub_2': 't102_sub_2', 'créé_par': 'créé_par', 'horodatage': 'horodatage', 'horodata_1': 'horodata_1', 'modifié_p': 'modifié_p', 't102_sub_3': 't102_sub_3', 't102_sub_4': 't102_sub_4', 't102_sub_5': 't102_sub_5', 't102_remai': 't102_remai', 't102_rem_1': 't102_rem_1', 't102_rem_2': 't102_rem_2', 't102_rem_3': 't102_rem_3', 't102_rem_4': 't102_rem_4', 't102_rem_5': 't102_rem_5', 't102_sub_6': 't102_sub_6', 't102_sub_7': 't102_sub_7', 't102_rem_6': 't102_rem_6', 't102_rem_7': 't102_rem_7', 't102_rem_8': 't102_rem_8', 't102_rem_9': 't102_rem_9', 't102_rem10': 't102_rem10', 't102_rem11': 't102_rem11', 't102_rem12': 't102_rem12', 't102_rem13': 't102_rem13', 't102_belon': 't102_belon', 't102_other': 't102_other', 't102_oth_1': 't102_oth_1', 't102_oth_2': 't102_oth_2', 't102_oth_3': 't102_oth_3', 't102_oth_4': 't102_oth_4', 't102_oth_5': 't102_oth_5', 't102_oth_6': 't102_oth_6', 't102_oth_7': 't102_oth_7', 't102_oth_8': 't102_oth_8', 't102_oth_9': 't102_oth_9', 't102_oth10': 't102_oth10', 't102_writt': 't102_writt', 't102_wri_1': 't102_wri_1', 't102_wri_2': 't102_wri_2', 't102_wri_3': 't102_wri_3', 't102_wri_4': 't102_wri_4', 't102_wri_5': 't102_wri_5', 't102_wri_6': 't102_wri_6', 't102_wri_7': 't102_wri_7', 't102_wri_8': 't102_wri_8', 't102_wri_9': 't102_wri_9', 't102_wri10': 't102_wri10', 't102_wri11': 't102_wri11', 't102_wri12': 't102_wri12', 't102_wri13': 't102_wri13', 't102_wri14': 't102_wri14', 't102_wri15': 't102_wri15', 't102_wri16': 't102_wri16', 't102_wri17': 't102_wri17', 't102_wri18': 't102_wri18', 't102_wri19': 't102_wri19', 't102_wri20': 't102_wri20', 't102_wri21': 't102_wri21', 't102_wri22': 't102_wri22', 't102_wri23': 't102_wri23', 't102_wri24': 't102_wri24', 't102_coord': 't102_coord', 't102_coo_1': 't102_coo_1', 't102_coo_2': 't102_coo_2', 't102_coo_3': 't102_coo_3', 't102_coo_4': 't102_coo_4', 't102_coo_5': 't102_coo_5', 't102_coo_6': 't102_coo_6', 't102_coo_7': 't102_coo_7', 't102_coo_8': 't102_coo_8', 't102_coo_9': 't102_coo_9', 't102_coo10': 't102_coo10', 't102_coo11': 't102_coo11', 't102_coo12': 't102_coo12', 't102_chron': 't102_chron', 't102_chr_1': 't102_chr_1', 't102_chr_2': 't102_chr_2', 't102_chr_3': 't102_chr_3', 't102_chr_4': 't102_chr_4', 't102_chr_5': 't102_chr_5', 't102_chr_6': 't102_chr_6', 't102_chr_7': 't102_chr_7', 't102_oth11': 't102_oth11', 't102_chr_8': 't102_chr_8', 't102_chr_9': 't102_chr_9', 't102_chr10': 't102_chr10', 't102_chr11': 't102_chr11', 't102_chr12': 't102_chr12', 't102_chr13': 't102_chr13', 't102_chr14': 't102_chr14', 't102_chr15': 't102_chr15', 't102_chr16': 't102_chr16', 't102_chr17': 't102_chr17', 't102_chr18': 't102_chr18', 't102_chr19': 't102_chr19', 't102_chr20': 't102_chr20', 't102_chr21': 't102_chr21', 't102_chr22': 't102_chr22', 't102_chr23': 't102_chr23', 't102_chr24': 't102_chr24', 't102_chr25': 't102_chr25', 't102_sig_i': 't102_sig_i', 't102_statu': 't102_statu', 't102_editi': 't102_editi', 't102_site_': 't102_site_', 't102_sit_1': 't102_sit_1', 't102_prima': 't102_prima', 't102_topon': 't102_topon', 't102_chr26': 't102_chr26', 't102_ig_th': 't102_ig_th', 't102_chr27': 't102_chr27', 't102_wri25': 't102_wri25', 't102_coo13': 't102_coo13', 't102_coo14': 't102_coo14', 't102_coo15': 't102_coo15', 't102_coo16': 't102_coo16', 't102_coo17': 't102_coo17', 't102_coo18': 't102_coo18', 't102_coo19': 't102_coo19', 't102_coo20': 't102_coo20', 't102_coo21': 't102_coo21', 't102_coo22': 't102_coo22', 't102_coo23': 't102_coo23', 't102_coo24': 't102_coo24', 't102_signa': 't102_signa', 't102_ig_at': 't102_ig_at', 't102_ig__1': 't102_ig__1', 't102_ig__2': 't102_ig__2', 't102_ig_su': 't102_ig_su', 't102_ig_ty': 't102_ig_ty', 't102_ig__3': 't102_ig__3', 't102_wri26': 't102_wri26', 't102_wri27': 't102_wri27', 't102_wri28': 't102_wri28', 't102_wri29': 't102_wri29', 't102_wri30': 't102_wri30', 't102_wri31': 't102_wri31', 't102_wri32': 't102_wri32', 't102_wri33': 't102_wri33', 't102_ig_pr': 't102_ig_pr', 't102_ig__4': 't102_ig__4', 't102_ig__5': 't102_ig__5', 't102_ig__6': 't102_ig__6', 't102_ig_re': 't102_ig_re', 't102_ig__7': 't102_ig__7', 't102_chr28': 't102_chr28', 't102_onlin': 't102_onlin', 't102_finds': 't102_finds', 't102_fin_1': 't102_fin_1', 't102_fin_2': 't102_fin_2', 't102_fin_3': 't102_fin_3', 't102_fin_4': 't102_fin_4', 't102_fin_5': 't102_fin_5', 't102_fin_6': 't102_fin_6', 't102_fin_7': 't102_fin_7', 't102_fin_8': 't102_fin_8', 't102_fin_9': 't102_fin_9', 't102_image': 't102_image', 'arc': 'arc', 'arf': 'arf', 'art': 'art', });
lyr_GhozzaAreaSites_8.set('fieldAliases', {'id': 'id', 'name': 'name', 'type': 'type', 'settlement': 'settlement', 'remains': 'remains', 'extracted': 'extracted', 'start date': 'start date', 'end date': 'end date', 'period': 'period', });
lyr_2022SurveyPointsNumberedClean_9.set('fieldAliases', {'Point Numb': 'Point Numb', 'Point Area': 'Point Area', 'Date Recor': 'Date Recor', 'Time recor': 'Time recor', 'Point name': 'Point name', 'x': 'x', 'y': 'y', 'z': 'z', 'field_9': 'field_9', 'Recorded B': 'Recorded B', });
lyr_Ghozza20km3kStrahler_2.set('fieldImages', {'arcid': 'TextEdit', 'grid_code': 'TextEdit', 'from_node': 'TextEdit', 'to_node': 'TextEdit', });
lyr_100mCamelNetworkBuffer_3.set('fieldImages', {'gid': '', 'objectid': '', 'id': '', 'cost': '', 'shape_leng': '', 'cost_meter': '', '_mean': '', '_median': '', '_stdev': '', '_min': '', '_max': '', '_range': '', '_Camelmean': '', '_Camelmedi': '', '_Camelstde': '', '_Camelmin': '', '_Camelmax': '', '_Camelrang': '', });
lyr_100mWalkingNetworkBuffer_4.set('fieldImages', {'gid': '', 'shape_leng': '', 'speed_kmh': '', 'time_h': '', '_mean': '', '_median': '', '_stdev': '', '_min': '', '_max': '', '_range': '', '_Walkingme': '', '_Walking_1': '', '_Walkingst': '', '_Walkingmi': '', '_Walkingma': '', '_Walkingra': '', });
lyr_Ghozza20kmBuffer_5.set('fieldImages', {'id': 'TextEdit', });
lyr_GhozzaMAFDOSurveyZones20km_6.set('fieldImages', {'id': 'TextEdit', });
lyr_GhozzaSubsites_7.set('fieldImages', {'index': '', 't102_subsi': '', 't102_sub_1': '', 't102_sub_2': '', 'créé_par': '', 'horodatage': '', 'horodata_1': '', 'modifié_p': '', 't102_sub_3': '', 't102_sub_4': '', 't102_sub_5': '', 't102_remai': '', 't102_rem_1': '', 't102_rem_2': '', 't102_rem_3': '', 't102_rem_4': '', 't102_rem_5': '', 't102_sub_6': '', 't102_sub_7': '', 't102_rem_6': '', 't102_rem_7': '', 't102_rem_8': '', 't102_rem_9': '', 't102_rem10': '', 't102_rem11': '', 't102_rem12': '', 't102_rem13': '', 't102_belon': '', 't102_other': '', 't102_oth_1': '', 't102_oth_2': '', 't102_oth_3': '', 't102_oth_4': '', 't102_oth_5': '', 't102_oth_6': '', 't102_oth_7': '', 't102_oth_8': '', 't102_oth_9': '', 't102_oth10': '', 't102_writt': '', 't102_wri_1': '', 't102_wri_2': '', 't102_wri_3': '', 't102_wri_4': '', 't102_wri_5': '', 't102_wri_6': '', 't102_wri_7': '', 't102_wri_8': '', 't102_wri_9': '', 't102_wri10': '', 't102_wri11': '', 't102_wri12': '', 't102_wri13': '', 't102_wri14': '', 't102_wri15': '', 't102_wri16': '', 't102_wri17': '', 't102_wri18': '', 't102_wri19': '', 't102_wri20': '', 't102_wri21': '', 't102_wri22': '', 't102_wri23': '', 't102_wri24': '', 't102_coord': '', 't102_coo_1': '', 't102_coo_2': '', 't102_coo_3': '', 't102_coo_4': '', 't102_coo_5': '', 't102_coo_6': '', 't102_coo_7': '', 't102_coo_8': '', 't102_coo_9': '', 't102_coo10': '', 't102_coo11': '', 't102_coo12': '', 't102_chron': '', 't102_chr_1': '', 't102_chr_2': '', 't102_chr_3': '', 't102_chr_4': '', 't102_chr_5': '', 't102_chr_6': '', 't102_chr_7': '', 't102_oth11': '', 't102_chr_8': '', 't102_chr_9': '', 't102_chr10': '', 't102_chr11': '', 't102_chr12': '', 't102_chr13': '', 't102_chr14': '', 't102_chr15': '', 't102_chr16': '', 't102_chr17': '', 't102_chr18': '', 't102_chr19': '', 't102_chr20': '', 't102_chr21': '', 't102_chr22': '', 't102_chr23': '', 't102_chr24': '', 't102_chr25': '', 't102_sig_i': '', 't102_statu': '', 't102_editi': '', 't102_site_': '', 't102_sit_1': '', 't102_prima': '', 't102_topon': '', 't102_chr26': '', 't102_ig_th': '', 't102_chr27': '', 't102_wri25': '', 't102_coo13': '', 't102_coo14': '', 't102_coo15': '', 't102_coo16': '', 't102_coo17': '', 't102_coo18': '', 't102_coo19': '', 't102_coo20': '', 't102_coo21': '', 't102_coo22': '', 't102_coo23': '', 't102_coo24': '', 't102_signa': '', 't102_ig_at': '', 't102_ig__1': '', 't102_ig__2': '', 't102_ig_su': '', 't102_ig_ty': '', 't102_ig__3': '', 't102_wri26': '', 't102_wri27': '', 't102_wri28': '', 't102_wri29': '', 't102_wri30': '', 't102_wri31': '', 't102_wri32': '', 't102_wri33': '', 't102_ig_pr': '', 't102_ig__4': '', 't102_ig__5': '', 't102_ig__6': '', 't102_ig_re': '', 't102_ig__7': '', 't102_chr28': '', 't102_onlin': '', 't102_finds': '', 't102_fin_1': '', 't102_fin_2': '', 't102_fin_3': '', 't102_fin_4': '', 't102_fin_5': '', 't102_fin_6': '', 't102_fin_7': '', 't102_fin_8': '', 't102_fin_9': '', 't102_image': '', 'arc': '', 'arf': '', 'art': '', });
lyr_GhozzaAreaSites_8.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'settlement': 'TextEdit', 'remains': 'TextEdit', 'extracted': 'TextEdit', 'start date': 'TextEdit', 'end date': 'TextEdit', 'period': 'TextEdit', });
lyr_2022SurveyPointsNumberedClean_9.set('fieldImages', {'Point Numb': 'TextEdit', 'Point Area': 'TextEdit', 'Date Recor': 'TextEdit', 'Time recor': 'TextEdit', 'Point name': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'z': 'TextEdit', 'field_9': 'TextEdit', 'Recorded B': 'TextEdit', });
lyr_Ghozza20km3kStrahler_2.set('fieldLabels', {'arcid': 'no label', 'grid_code': 'no label', 'from_node': 'no label', 'to_node': 'no label', });
lyr_100mCamelNetworkBuffer_3.set('fieldLabels', {'gid': 'no label', 'objectid': 'no label', 'id': 'no label', 'cost': 'no label', 'shape_leng': 'no label', 'cost_meter': 'no label', '_mean': 'no label', '_median': 'no label', '_stdev': 'no label', '_min': 'no label', '_max': 'no label', '_range': 'no label', '_Camelmean': 'no label', '_Camelmedi': 'no label', '_Camelstde': 'no label', '_Camelmin': 'no label', '_Camelmax': 'no label', '_Camelrang': 'no label', });
lyr_100mWalkingNetworkBuffer_4.set('fieldLabels', {'gid': 'no label', 'shape_leng': 'no label', 'speed_kmh': 'no label', 'time_h': 'no label', '_mean': 'no label', '_median': 'no label', '_stdev': 'no label', '_min': 'no label', '_max': 'no label', '_range': 'no label', '_Walkingme': 'no label', '_Walking_1': 'no label', '_Walkingst': 'no label', '_Walkingmi': 'no label', '_Walkingma': 'no label', '_Walkingra': 'no label', });
lyr_Ghozza20kmBuffer_5.set('fieldLabels', {'id': 'no label', });
lyr_GhozzaMAFDOSurveyZones20km_6.set('fieldLabels', {'id': 'header label', });
lyr_GhozzaSubsites_7.set('fieldLabels', {'index': 'no label', 't102_subsi': 'no label', 't102_sub_1': 'no label', 't102_sub_2': 'no label', 'créé_par': 'no label', 'horodatage': 'no label', 'horodata_1': 'no label', 'modifié_p': 'no label', 't102_sub_3': 'no label', 't102_sub_4': 'no label', 't102_sub_5': 'no label', 't102_remai': 'no label', 't102_rem_1': 'no label', 't102_rem_2': 'no label', 't102_rem_3': 'no label', 't102_rem_4': 'no label', 't102_rem_5': 'no label', 't102_sub_6': 'no label', 't102_sub_7': 'no label', 't102_rem_6': 'no label', 't102_rem_7': 'no label', 't102_rem_8': 'no label', 't102_rem_9': 'no label', 't102_rem10': 'no label', 't102_rem11': 'no label', 't102_rem12': 'no label', 't102_rem13': 'no label', 't102_belon': 'no label', 't102_other': 'no label', 't102_oth_1': 'no label', 't102_oth_2': 'no label', 't102_oth_3': 'no label', 't102_oth_4': 'no label', 't102_oth_5': 'no label', 't102_oth_6': 'no label', 't102_oth_7': 'no label', 't102_oth_8': 'no label', 't102_oth_9': 'no label', 't102_oth10': 'no label', 't102_writt': 'no label', 't102_wri_1': 'no label', 't102_wri_2': 'no label', 't102_wri_3': 'no label', 't102_wri_4': 'no label', 't102_wri_5': 'no label', 't102_wri_6': 'no label', 't102_wri_7': 'no label', 't102_wri_8': 'no label', 't102_wri_9': 'no label', 't102_wri10': 'no label', 't102_wri11': 'no label', 't102_wri12': 'no label', 't102_wri13': 'no label', 't102_wri14': 'no label', 't102_wri15': 'no label', 't102_wri16': 'no label', 't102_wri17': 'no label', 't102_wri18': 'no label', 't102_wri19': 'no label', 't102_wri20': 'no label', 't102_wri21': 'no label', 't102_wri22': 'no label', 't102_wri23': 'no label', 't102_wri24': 'no label', 't102_coord': 'no label', 't102_coo_1': 'no label', 't102_coo_2': 'no label', 't102_coo_3': 'no label', 't102_coo_4': 'no label', 't102_coo_5': 'no label', 't102_coo_6': 'no label', 't102_coo_7': 'no label', 't102_coo_8': 'no label', 't102_coo_9': 'no label', 't102_coo10': 'no label', 't102_coo11': 'no label', 't102_coo12': 'no label', 't102_chron': 'no label', 't102_chr_1': 'no label', 't102_chr_2': 'no label', 't102_chr_3': 'no label', 't102_chr_4': 'no label', 't102_chr_5': 'no label', 't102_chr_6': 'no label', 't102_chr_7': 'no label', 't102_oth11': 'no label', 't102_chr_8': 'no label', 't102_chr_9': 'no label', 't102_chr10': 'no label', 't102_chr11': 'no label', 't102_chr12': 'no label', 't102_chr13': 'no label', 't102_chr14': 'no label', 't102_chr15': 'no label', 't102_chr16': 'no label', 't102_chr17': 'no label', 't102_chr18': 'no label', 't102_chr19': 'no label', 't102_chr20': 'no label', 't102_chr21': 'no label', 't102_chr22': 'no label', 't102_chr23': 'no label', 't102_chr24': 'no label', 't102_chr25': 'no label', 't102_sig_i': 'no label', 't102_statu': 'no label', 't102_editi': 'no label', 't102_site_': 'no label', 't102_sit_1': 'no label', 't102_prima': 'no label', 't102_topon': 'no label', 't102_chr26': 'no label', 't102_ig_th': 'no label', 't102_chr27': 'no label', 't102_wri25': 'no label', 't102_coo13': 'no label', 't102_coo14': 'no label', 't102_coo15': 'no label', 't102_coo16': 'no label', 't102_coo17': 'no label', 't102_coo18': 'no label', 't102_coo19': 'no label', 't102_coo20': 'no label', 't102_coo21': 'no label', 't102_coo22': 'no label', 't102_coo23': 'no label', 't102_coo24': 'no label', 't102_signa': 'no label', 't102_ig_at': 'no label', 't102_ig__1': 'no label', 't102_ig__2': 'no label', 't102_ig_su': 'no label', 't102_ig_ty': 'no label', 't102_ig__3': 'no label', 't102_wri26': 'no label', 't102_wri27': 'no label', 't102_wri28': 'no label', 't102_wri29': 'no label', 't102_wri30': 'no label', 't102_wri31': 'no label', 't102_wri32': 'no label', 't102_wri33': 'no label', 't102_ig_pr': 'no label', 't102_ig__4': 'no label', 't102_ig__5': 'no label', 't102_ig__6': 'no label', 't102_ig_re': 'no label', 't102_ig__7': 'no label', 't102_chr28': 'no label', 't102_onlin': 'no label', 't102_finds': 'no label', 't102_fin_1': 'no label', 't102_fin_2': 'no label', 't102_fin_3': 'no label', 't102_fin_4': 'no label', 't102_fin_5': 'no label', 't102_fin_6': 'no label', 't102_fin_7': 'no label', 't102_fin_8': 'no label', 't102_fin_9': 'no label', 't102_image': 'no label', 'arc': 'no label', 'arf': 'no label', 'art': 'no label', });
lyr_GhozzaAreaSites_8.set('fieldLabels', {'id': 'no label', 'name': 'header label', 'type': 'header label', 'settlement': 'no label', 'remains': 'no label', 'extracted': 'no label', 'start date': 'no label', 'end date': 'no label', 'period': 'no label', });
lyr_2022SurveyPointsNumberedClean_9.set('fieldLabels', {'Point Numb': 'header label', 'Point Area': 'no label', 'Date Recor': 'no label', 'Time recor': 'no label', 'Point name': 'no label', 'x': 'no label', 'y': 'no label', 'z': 'no label', 'field_9': 'no label', 'Recorded B': 'no label', });
lyr_2022SurveyPointsNumberedClean_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});