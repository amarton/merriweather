(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 1000,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.tagline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5).p("Eg0XAAAMBovAAA");
	this.shape.setTransform(443.1,36.6,1.179,0.819);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.5).p("EhCGAAAMCENAAA");
	this.shape_1.setTransform(443,0,0.934,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_2.setTransform(833.8,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBeQgOgFgLgKQgHgGgFgIQgFgHgFgOIAWgEQADAJAFAIQAFAHAHAFQAHAEAJADQAJACAJAAQALAAAIgCQAJgDAGgEQAGgFADgGQADgHAAgIQAAgKgIgJQgHgHgOgEIgkgKQgMgCgHgCQgHgDgGgFQgHgHgFgJQgDgKAAgLQAAgMAEgJQAFgJAIgIQAJgGAMgEQAMgEANAAQAMAAALADQAKADAJAGQAJAGAGAIQAGAJAEAMIgVAGQgCgIgDgEQgCgFgFgEQgHgGgKgDQgJgEgIABQgIAAgIACQgHACgGAFQgFADgDAHQgDAFAAAHQAAALAHAHQAHAHARAEIAiAIQAMADAJAFQAJADAHAGQAGAHADAIQADAJAAAKQAAANgFALQgFALgJAHQgKAIgNADQgNAFgQAAQgQAAgNgFg");
	this.shape_3.setTransform(821.6,19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_4.setTransform(810.3,27.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRBgQgIgCgGgDQgHgDgGgEQgFgEgEgGQgGgIgDgMQgCgLAAgQIAAh7IAXAAIAAB7QAAANACAIQACAJAEAFQAFAGAKAEQAKAEAJAAQALAAAJgEQAKgDAFgHQAFgGACgIQACgIAAgNIAAh7IAUAAIAAB7QAAAQgDALQgDALgHAJQgEAGgFAEQgGAEgHADQgGADgIABIgQACg");
	this.shape_5.setTransform(798,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag8BfIAAi9IB3AAIAAAVIhgAAIAAA9IBMAAIAAARIhMAAIAABFIBiAAIAAAVg");
	this.shape_6.setTransform(775,19.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAsBfIAAhbIhXAAIAABbIgYAAIAAi9IAYAAIAABPIBXAAIAAhPIAYAAIAAC9g");
	this.shape_7.setTransform(757.3,19.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLBfIAAioIg2AAIAAgVICDAAIAAAVIg2AAIAACog");
	this.shape_8.setTransform(741.1,19.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAvBfIhhikIAAAMIAAAMIAACMIgTAAIAAi9IAeAAIBaCaIAAgNIAAgOIAAh/IATAAIAAC9g");
	this.shape_9.setTransform(717.6,19.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKBfIAAi9IAVAAIAAC9g");
	this.shape_10.setTransform(704.6,19.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E0261C").s().p("AgaBeQgOgFgLgKQgHgGgFgIQgFgHgFgOIAWgEQADAJAFAIQAFAHAHAFQAHAEAJADQAJACAJAAQALAAAIgCQAJgDAGgEQAGgFADgGQADgHAAgIQAAgKgIgJQgHgHgOgEIgkgKQgMgCgHgCQgHgDgGgFQgHgHgFgJQgDgKAAgLQAAgMAEgJQAFgJAIgIQAJgGAMgEQAMgEANAAQAMAAALADQAKADAJAGQAJAGAGAIQAGAJAEAMIgVAGQgCgIgDgEQgCgFgFgEQgHgGgKgDQgJgEgIABQgIAAgIACQgHACgGAFQgFADgDAHQgDAFAAAHQAAALAHAHQAHAHARAEIAiAIQAMADAJAFQAJADAHAGQAGAHADAIQADAJAAAKQAAANgFALQgFALgJAHQgKAIgNADQgNAFgQAAQgQAAgNgFg");
	this.shape_11.setTransform(686.3,19.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E0261C").s().p("Ag8BfIAAi9IB3AAIAAAVIhgAAIAAA9IBMAAIAAARIhMAAIAABFIBiAAIAAAVg");
	this.shape_12.setTransform(672,19.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0261C").s().p("AgKBfIAAi9IAVAAIAAC9g");
	this.shape_13.setTransform(660.4,19.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E0261C").s().p("AgLBfIAAioIg2AAIAAgVICDAAIAAAVIg3AAIAACog");
	this.shape_14.setTransform(650.4,19.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E0261C").s().p("AgKBfIAAi9IAVAAIAAC9g");
	this.shape_15.setTransform(640.4,19.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E0261C").s().p("AgLBhIgOgEQgNgGgKgMQgGgHgEgJQgFgIgDgKIgFgVQgCgLAAgKQAAgOAGgZIAHgSIAJgOIALgLIAOgIQAHgDAIgCQAJgCAHAAQANAAALAEQALAEAJAHQAIAIAHALQAGAMAEAPIgXAFQgDgMgFgJQgEgJgGgFQgFgFgIgDQgHgDgJABQgKgBgKAGQgKAFgHAKQgGALgEAPQgEAPAAAQQAAARAEAPQAEAPAGAKQAHALAKAFQAKAGAKgBQAKAAAJgEQAKgFAGgIQAGgIAHgXIAWAGQgEAPgEAIQgFAJgHAIQgJAMgNAFQgNAGgQAAg");
	this.shape_16.setTransform(629.4,19.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E0261C").s().p("Ag3BfIAAi9IAYAAIAACoIBXAAIAAAVg");
	this.shape_17.setTransform(608.6,19.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E0261C").s().p("AAzBfIgUg4IhEAAIgRA4IgUAAIA+i9IAZAAIA+C9gAAaAVIgbhaIgeBaIA5AAg");
	this.shape_18.setTransform(593,19.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E0261C").s().p("AAsBfIAAhbIhXAAIAABbIgYAAIAAi9IAYAAIAABPIBXAAIAAhPIAYAAIAAC9g");
	this.shape_19.setTransform(576.7,19.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E0261C").s().p("AgKBfIAAioIg3AAIAAgVICDAAIAAAVIg3AAIAACog");
	this.shape_20.setTransform(561.1,19.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E0261C").s().p("Ag8BfIAAi9IB3AAIAAAVIhgAAIAAA9IBMAAIAAARIhMAAIAABFIBiAAIAAAVg");
	this.shape_21.setTransform(547.5,19.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E0261C").s().p("Ag3BfIAAi9IAYAAIAACoIBXAAIAAAVg");
	this.shape_22.setTransform(533.4,19.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E0261C").s().p("AgLBfIAAioIg2AAIAAgVICDAAIAAAVIg3AAIAACog");
	this.shape_23.setTransform(512.4,19.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E0261C").s().p("AgaBeQgOgFgLgKQgHgGgFgIQgFgHgFgOIAWgEQADAJAFAIQAFAHAHAFQAHAEAJADQAJACAJAAQALAAAIgCQAJgDAGgEQAGgFADgGQADgHAAgIQAAgKgIgJQgHgHgOgEIgkgKQgMgCgHgCQgHgDgGgFQgHgHgFgJQgDgKAAgLQAAgMAEgJQAFgJAIgIQAJgGAMgEQAMgEANAAQAMAAALADQAKADAJAGQAJAGAGAIQAGAJAEAMIgVAGQgCgIgDgEQgCgFgFgEQgHgGgKgDQgJgEgIABQgIAAgIACQgHACgGAFQgFADgDAHQgDAFAAAHQAAALAHAHQAHAHARAEIAiAIQAMADAJAFQAJADAHAGQAGAHADAIQADAJAAAKQAAANgFALQgFALgJAHQgKAIgNADQgNAFgQAAQgQAAgNgFg");
	this.shape_24.setTransform(497.4,19.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E0261C").s().p("AgPBhQgIgBgGgDQgHgDgHgFIgLgLQgFgHgEgJQgFgHgDgKIgEgUIgCgVQAAgNAGgaIAHgRIAJgOQAFgHAGgFQAHgFAHgEQAHgDAIgCQAIgCAHAAQAIAAAJACQAIACAHADQAHAEAGAEQAGAGAFAGIAJAOIAHARQAGAaAAAOQAAAKgCALIgFATIgIASQgFAJgGAIIgKAKQgHAFgGADQgHADgHABIgPACgAgUhJQgLAGgGAKQgIALgDAPQgEAPAAAQQAAARAEAPQADAPAIAKQAHALAKAGQAJAFALAAQAMAAAKgFQAJgGAHgLQAIgKADgPQAEgPAAgRQAAgRgDgPQgFgPgHgLQgGgKgKgFQgKgGgMABQgLAAgJAFg");
	this.shape_25.setTransform(481.2,19.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E0261C").s().p("ABFBfIAAilIg/ClIgOAAIg/ilIAAClIgUAAIAAi9IAkAAIA3CXIA5iXIAiAAIAAC9g");
	this.shape_26.setTransform(461,19.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag8BfIAAi9IB3AAIAAAVIhgAAIAAA9IBMAAIAAARIhMAAIAABFIBiAAIAAAVg");
	this.shape_27.setTransform(435.1,19.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAsBfIAAhbIhXAAIAABbIgYAAIAAi9IAYAAIAABPIBXAAIAAhPIAYAAIAAC9g");
	this.shape_28.setTransform(417.3,19.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgKBfIAAioIg3AAIAAgVICDAAIAAAVIg2AAIAACog");
	this.shape_29.setTransform(401.2,19.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag5BfIAAi9IBzAAIAAAVIhbAAIAAA8IBLAAIAAASIhLAAIAABag");
	this.shape_30.setTransform(380.8,19.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgPBhQgIgBgHgDQgHgDgFgFIgLgLQgGgHgEgJQgFgHgDgKIgFgUIgBgVQAAgNAGgaIAHgRIAJgOQAFgHAHgFQAFgFAIgEQAHgDAIgCQAIgCAHAAQAJAAAIACQAHACAHADQAIAEAGAEQAHAGAEAGIAJAOIAHARQAGAaAAAOQAAAKgCALIgEATIgJASQgEAJgGAIIgLAKQgHAFgGADQgGADgIABIgPACgAgVhJQgJAGgHAKQgHALgFAPQgDAPAAAQQAAARADAPQAFAPAHAKQAHALAJAGQAKAFALAAQAMAAAJgFQAKgGAHgLQAIgKADgPQAEgPAAgRQAAgRgEgPQgDgPgIgLQgGgKgKgFQgKgGgMABQgLAAgKAFg");
	this.shape_31.setTransform(363.5,19.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag8BfIAAi9IB3AAIAAAVIhgAAIAAA9IBMAAIAAARIhMAAIAABFIBiAAIAAAVg");
	this.shape_32.setTransform(340.1,19.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAvBfIhhikIAAAMIAAAMIAACMIgTAAIAAi9IAeAAIBaCaIAAgNIAAgOIAAh/IATAAIAAC9g");
	this.shape_33.setTransform(322.2,19.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgPBhQgIgBgGgDQgHgDgHgFIgKgLQgGgHgEgJQgFgHgDgKIgFgUIgBgVQAAgNAGgaIAHgRIAJgOQAFgHAGgFQAGgFAIgEQAHgDAIgCQAIgCAHAAQAIAAAJACQAHACAIADQAHAEAGAEQAGAGAFAGIAJAOIAHARQAGAaAAAOQAAAKgCALIgFATIgIASQgFAJgFAIIgLAKQgHAFgGADQgHADgHABIgPACgAgUhJQgLAGgGAKQgHALgFAPQgDAPAAAQQAAARADAPQAFAPAHAKQAHALAKAGQAJAFALAAQAMAAAJgFQAKgGAHgLQAIgKADgPQAEgPAAgRQAAgRgDgPQgFgPgHgLQgGgKgKgFQgKgGgMABQgLAAgJAFg");
	this.shape_34.setTransform(303.8,19.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgaBeQgOgFgLgKQgHgGgFgIQgFgHgFgOIAWgEQADAJAFAIQAFAHAHAFQAHAEAJADQAJACAJAAQALAAAIgCQAJgDAGgEQAGgFADgGQADgHAAgIQAAgKgIgJQgHgHgOgEIgkgKQgMgCgHgCQgHgDgGgFQgHgHgFgJQgDgKAAgLQAAgMAEgJQAFgJAIgIQAJgGAMgEQAMgEANAAQAMAAALADQAKADAJAGQAJAGAGAIQAGAJAEAMIgVAGQgCgIgDgEQgCgFgFgEQgHgGgKgDQgJgEgIABQgIAAgIACQgHACgGAFQgFADgDAHQgDAFAAAHQAAALAHAHQAHAHARAEIAiAIQAMADAJAFQAJADAHAGQAGAHADAIQADAJAAAKQAAANgFALQgFALgJAHQgKAIgNADQgNAFgQAAQgQAAgNgFg");
	this.shape_35.setTransform(278.9,19.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgKBfIAAi9IAVAAIAAC9g");
	this.shape_36.setTransform(267.6,19.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag8BfIAAi9IB3AAIAAAVIhgAAIAAA9IBMAAIAAARIhMAAIAABFIBiAAIAAAVg");
	this.shape_37.setTransform(249.8,19.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AArBfIgjhTIg1AAIAABTIgWAAIAAi9IBJAAQANAAALAEQALAEAIAHQAIAHAFAKQAEAKAAAMQAAAJgDAKQgEAJgGAHQgEAFgFABIgNAGIAlBYgAgtgFIAwAAQAKAAAHgDQAHgCAGgGQAEgFADgGQACgHAAgHQAAgHgCgGQgDgGgFgEQgEgFgHgCQgHgCgIAAIgzAAg");
	this.shape_38.setTransform(232.9,19.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgPBhQgIgBgGgDQgIgDgFgFIgMgLQgFgHgFgJQgEgHgDgKIgEgUIgCgVQAAgNAGgaIAGgRIAKgOQAFgHAGgFQAHgFAHgEQAHgDAIgCQAIgCAHAAQAJAAAHACQAIACAIADQAHAEAGAEQAGAGAGAGIAJAOIAHARQAFAaAAAOQAAAKgCALIgFATIgHASQgFAJgHAIIgLAKQgFAFgHADQgHADgHABIgPACgAgVhJQgJAGgIAKQgGALgEAPQgEAPAAAQQAAARAEAPQAEAPAGAKQAIALAJAGQALAFAKAAQALAAALgFQAJgGAIgLQAGgKAEgPQAEgPAAgRQAAgRgEgPQgEgPgGgLQgHgKgKgFQgKgGgMABQgKAAgLAFg");
	this.shape_39.setTransform(214.6,19.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("ABEBfIAAilIg+ClIgOAAIg/ilIAAClIgUAAIAAi9IAkAAIA4CXIA4iXIAjAAIAAC9g");
	this.shape_40.setTransform(193.9,19.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgKBfIAAi9IAVAAIAAC9g");
	this.shape_41.setTransform(178.7,19.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgKBfIAAioIg3AAIAAgVICDAAIAAAVIg3AAIAACog");
	this.shape_42.setTransform(168.2,19.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ag3BfIAAi9IAYAAIAACoIBXAAIAAAVg");
	this.shape_43.setTransform(155.2,19.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAzBfIgUg4IhEAAIgRA4IgUAAIA+i9IAZAAIA+C9gAAaAVIgbhaIgeBaIA5AAg");
	this.shape_44.setTransform(139.1,19.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhDBfIAAi9IBJAAQAMAAAJACQAIACAHAFQAKAHAFAJQAFAKAAAMQAAAJgDAJQgEAIgGAGQgHAGgNAFIAOAEQAFACAFAEQAIAIADAJQAEAJAAAKQAAAPgGALQgGAMgMAHQgHAEgJACQgJACgNAAgAgsBKIAxAAQAJAAAHgCQAIgCAFgEQAFgFACgGQADgGAAgIQAAgHgDgHQgCgHgFgFQgFgGgIgCQgHgDgMAAIguAAgAgsgMIApAAQAKAAAHgCQAIgBAFgEQAFgEADgHQAEgHAAgIQAAgHgDgFQgCgGgFgEQgFgEgHgBQgHgDgJAAIgtAAg");
	this.shape_45.setTransform(123.4,19.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgLBfIAAhQIhAhtIAcAAIAyBYIAzhYIAVAAIhABtIAABQg");
	this.shape_46.setTransform(99.6,19.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAsBfIAAhbIhXAAIAABbIgYAAIAAi9IAYAAIAABPIBXAAIAAhPIAYAAIAAC9g");
	this.shape_47.setTransform(83.1,19.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AApBfIgpiSIglCSIgZAAIgwi9IAYAAIAnCZIAoiZIASAAIAsCZIAjiZIAVAAIguC9g");
	this.shape_48.setTransform(62.2,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,887.9,41.6);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhOBYIAAivICdAAIAACvg");
	mask.setTransform(8,8.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA291E").s().p("AAEAnIgEgHQgDgGgBgGIAAg7IAJAAIAABPg");
	this.shape.setTransform(1.8,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA291E").s().p("AgEgnIAJAAIAAA7IgEAMIgEAHIgBABg");
	this.shape_1.setTransform(14.1,10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA291E").s().p("AgEguIAIAAIAABXIAAABIgIAFg");
	this.shape_2.setTransform(12.1,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA291E").s().p("AgEg2IAJAAIAABnIgDACIgGAEg");
	this.shape_3.setTransform(10,11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EA291E").s().p("AAEAvIgFgFIgDgCIAAhWIAJAAIAABdg");
	this.shape_4.setTransform(3.8,10.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EA291E").s().p("AAEA1IgIgFIAAhkIAJAAIAABpg");
	this.shape_5.setTransform(5.9,11.5);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,6.1,13.4,11.1);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhOAaIAAgzICdAAIAAAzg");
	mask.setTransform(7.9,2.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#324C98").s().p("AhCAaQAAgagMgLQAWAFAXgEQAUgDANgMIAHAFQAMAHAPADQAZAEAUgFIgBAAQgFAGgDAJQgDALgBALg");
	this.shape.setTransform(7.9,2.6);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.8,5.3);


(lib.personred = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF2630").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgLANABQAOgBAKALQAKAKAAANQAAAOgKAKQgKALgOAAQgNAAgKgLg");
	this.shape.setTransform(12.7,5.2,1.474,1.474);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CF2630").s().p("AALCLQgGgGAAgIIAAh9IgJAAIAAB9QAAAIgGAGQgFAFgIAAQgIAAgGgFQgFgGAAgIIAAjJIgPA2QgCAFgFADQgFADgGgCQgFgBgDgFQgDgFACgGIAdhnQACgKALAAIAAAAIASAAQAKALAOAAQAPAAAKgLIASAAIAAAAQAKgBAEALIAdBnQABAGgDAFQgDAFgFABQgGACgFgDQgFgDgBgFIgQg4IAADLQAAAIgGAGQgFAFgIAAQgIAAgFgFg");
	this.shape_1.setTransform(12.7,33.1,1.474,1.474);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.5,54.4);


(lib.persongrey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#070807").ss(0.3).p("ABWAAQAAAjgZAaQgaAZgjAAQgiAAgagZQgZgaAAgjQAAgjAZgZQAagZAiAAQAjAAAaAZQAZAZAAAjg");
	this.shape.setTransform(33.2,13.3,1.542,1.542);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#425461").s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAZgjAAQgiAAgagZg");
	this.shape_1.setTransform(33.2,13.3,1.542,1.542);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#070807").ss(0.3).p("ADVhNIhIkAQgDgMgKgHQgJgHgMABIgtAAQgZAbglAAQgkAAgZgbIguAAQgMAAgJAHQgJAHgDALIhIEAQgEAOAHANQAHAMAOAEQAOAEAMgHQANgHAEgOIAmiGIAAH4QAAAUAOAOQANANAUAAQATAAAOgNQAOgOAAgUIAAk4IAaAAIAAE4QAAAUAOAOQAOANATAAQAUAAAOgNQANgOAAgUIAAn8IAnCKQAEAOANAHQAMAHAOgEQAOgEAHgMQAHgNgEgOg");
	this.shape_2.setTransform(33.2,86,1.542,1.542);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#425461").s().p("AAbFaQgOgOAAgUIAAk4IgaAAIAAE4QAAAUgOAOQgOANgTAAQgUAAgNgNQgOgOAAgUIAAn4IgmCGQgEAOgNAHQgMAHgOgEQgOgEgHgMQgHgNAEgOIBIkAQADgLAJgHQAJgHAMAAIAuAAQAZAbAkAAQAlAAAZgbIAtAAQAMgBAJAHQAKAHADAMIBIEAQAEAOgHANQgHAMgOAEQgOAEgMgHQgNgHgEgOIgniKIAAH8QAAAUgNAOQgOANgUAAQgTAAgOgNg");
	this.shape_3.setTransform(33.2,86,1.542,1.542);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,68.4,143.5);


(lib.personblue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B749F").s().p("AgOAPQgGgGAAgJQAAgHAGgHQAHgGAHAAQAJAAAGAGQAGAHAAAHQAAAJgGAGQgGAGgJAAQgHAAgHgGg");
	this.shape.setTransform(5.4,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B749F").s().p("AAGBWQgDgEAAgEIAAhOIgFAAIAABOQAAAEgEAEQgDAEgFgBQgFABgDgEQgEgEAAgEIAAh9IgJAiQgBADgDACQgDABgEgBQgDAAgCgDQgCgDABgEIAShAQACgHAGAAIAMAAQAGAHAIAAQAJAAAGgHIAMAAQAGAAACAHIASBAQABAEgCADQgBADgEAAQgIADgDgIIgJgjIAAB+QAAAEgEAEQgDAEgFgBQgFABgEgEg");
	this.shape_1.setTransform(5.4,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.8,23);


(lib.person = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E8E9").s().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAaAAAiQAAAkgZAZQgaAZgjAAQgiAAgagZg");
	this.shape.setTransform(33.2,13.4,1.544,1.544);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E8E9").s().p("AAbFaQgOgOAAgUIAAk4IgaAAIAAE4QAAAUgOAOQgOANgTAAQgUAAgNgNQgOgOAAgUIAAn4IgmCGQgEAOgNAHQgMAHgOgEQgOgEgHgMQgHgNAEgOIBIkAQADgLAJgHQAJgHAMAAIAtAAQAaAbAkAAQAlAAAZgbIAtAAQAMgBAJAHQAKAHADAMIBIEAQAEAOgHANQgHAMgOAEQgOAEgNgHQgMgHgEgOIgniKIAAH8QAAAUgNAOQgOANgUAAQgTAAgOgNg");
	this.shape_1.setTransform(33.2,86.1,1.544,1.544);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.5,141.7);


(lib.peopleshottext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2D21").s().p("Ah5CWIAAkrIBbAAIAkACQARADAOAFQANAFAMAIQALAHALAMQAJAKAIAMQAHANAFANIAHAdIADAeIgDAdIgHAcIgMAaQgHAMgJALQgJALgMAIQgLAIgNAFQgOAGgOADQgNADgSAAgAg1BdIAeAAQARAAALgFQAOgHAJgMQALgOAFgTQAGgSAAgSQAAgUgGgSQgFgRgKgOQgKgNgNgFQgLgGgRgBIgfAAg");
	this.shape.setTransform(397.2,67.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF2D21").s().p("AhqCWIAAkrIDVAAIAAA6IiOAAIAAA9IBvAAIAAA3IhvAAIAABBICOAAIAAA8g");
	this.shape_1.setTransform(370,67.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF2D21").s().p("AheCWIAAkrIBIAAIAADvIB1AAIAAA8g");
	this.shape_2.setTransform(346.2,67.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF2D21").s().p("AheCWIAAkrIBIAAIAADvIB1AAIAAA8g");
	this.shape_3.setTransform(323.6,67.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF2D21").s().p("AgiCWIAAkrIBFAAIAAErg");
	this.shape_4.setTransform(304.6,67.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF2D21").s().p("AAuCWIg5iDIgqA+IAABFIhGAAIAAkrIBGAAIAACOIBbiOIBEAAIhIBrIBaDAg");
	this.shape_5.setTransform(285.1,67.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF2D21").s().p("AhqCWIAAkrIDVAAIAAA6IiOAAIAAA9IBvAAIAAA3IhvAAIAABBICOAAIAAA8g");
	this.shape_6.setTransform(246.6,67.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF2D21").s().p("AAsCWIgsh4IgyAAIAAB4IhHAAIAAkrICCAAQAdABARAEQASAFAOAKQAOAMAJAUQAIASAAAUQABAQgHAQQgFAPgLAMQgJAIgVAJIA4CFgAgygSIArAAQAZAAAKgHQAIgEAFgKQAFgJAAgKQAAgIgEgJQgEgIgGgEQgHgFgHgCIgbgBIgpAAg");
	this.shape_7.setTransform(218.5,67.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF2D21").s().p("AhqCWIAAkrIDVAAIAAA6IiOAAIAAA9IBvAAIAAA3IhvAAIAABBICOAAIAAA8g");
	this.shape_8.setTransform(191.4,67.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF2D21").s().p("AAwCWIgwjFIgDARIgrC0IhFAAIhNkrIBIAAIApC2IADAKIACAJIAxjJIA/AAIAyDJIADgJIACgKIAri2IA5AAIhLErg");
	this.shape_9.setTransform(158,67.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF2D21").s().p("AgtCRQgVgHgRgOQgNgMgHgMQgHgNgGgUIBCgKQAFAUAMAKQANAJAUAAQAIAAAKgDQAIgDAGgHQAIgGADgIQADgJAAgJQAAgKgDgJQgEgIgHgHQgGgGgIgEQgJgEgJAAQgMAAgMAGQgLAGgHAMIg5gKIALioIC7AAIgIA+IiBAAIgEBCQAOgNAOgGQAOgGATAAQAWAAASAHQARAHAOANQANANAHAPQAHASAAAVQAAAYgIAUQgIATgQAOQgPAOgWAHQgVAIgbAAQgYAAgVgHg");
	this.shape_10.setTransform(114.1,68.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF2D21").s().p("Ah4CYIAAg3IBaAAIAAiqQg8AkgXAJIAAg+QAZgHAngUQANgHAKgJQAJgJAGgJIAxAAIAAD4IBTAAIAAA3g");
	this.shape_11.setTransform(88.5,67.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF2D21").s().p("AgZCYQgMgDgKgFQgLgFgJgIQgJgIgHgJQgLgQgNgkQgGgTgDgrQAAgUAIgoQAGgTARggQAHgJAKgJQAJgHALgGQALgGAMgDQAMgCANAAQAMAAAMACQAMADALAGQALAFAKAIQAJAIAIAKIANAXIAKAbQAJAoAAAWQgDAqgGATQgOAkgKAOQgHAKgJAIQgKAIgKAGQgLAFgMADQgNACgMAAQgNAAgMgCgAgUhhQgIAGgFAMQgFALgDAUQgCATAAAcQAAAbACAUQADAUAFANQAFAMAJAGQAIAGALgBQAMAAAIgFQAIgGAGgMQAFgMACgUQADgSAAgbQAAgcgCgUQgDgUgFgNQgFgMgJgGQgJgGgLAAQgLAAgJAGg");
	this.shape_12.setTransform(61.1,67.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF2D21").s().p("AhyCYIAAg7IASgNIAlgaQAXgQA1gvQAKgLAGgMQAGgMAAgLQAAgSgLgLQgMgMgQAAQgMAAgJAEQgIAEgGAHQgHAHgEALQgEAKgBAPIg/gOQAFgZALgSQAJgTAPgMQAPgNASgGQAUgGAWAAQAZAAARAFQARAGAPAMQASANAIATQAKASgBAWQAAAOgDAMQgDANgIAMQgIAKgMAMIgdAZQgVAQg1AiICOAAIgFA8g");
	this.shape_13.setTransform(34.5,67.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF2D21").s().p("AA2CWIhzjKIAAALIABANIAACyIg2AAIAAkrIBMAAIBkCvIgCgTIAAicIA3AAIAAErg");
	this.shape_14.setTransform(-4.3,67.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF2D21").s().p("AgiCWIAAkrIBFAAIAAErg");
	this.shape_15.setTransform(-25.3,67.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF2D21").s().p("AhqCWIAAkrIDVAAIAAA6IiOAAIAAA9IBvAAIAAA3IhvAAIAABBICOAAIAAA8g");
	this.shape_16.setTransform(465.5,17);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF2D21").s().p("AAsCWIgsh4IgyAAIAAB4IhHAAIAAkrICCAAQAdABASAEQARAFAOAKQAPAMAIAUQAJASAAAUQAAAQgHAQQgFAPgLAMQgKAIgUAJIA4CFgAgygSIArAAQAZAAALgHQAHgEAFgKQAFgJAAgKQAAgIgEgJQgDgIgHgFQgHgEgHgCIgbgBIgpAAg");
	this.shape_17.setTransform(437.5,17);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF2D21").s().p("AgcCYQgNgDgLgGQgNgFgJgJQgKgHgIgLQgLgPgPgkQgGgTgDgpQAAgVAJgnIALgbIAOgWQAIgLAKgIQAKgJANgFQAMgGAOgDQAOgCANAAQAOAAAOACQANADAMAGQALAFAKAIQAKAJAIALQATAgAHATQAJAoAAATQgEAogFATQgPAlgKANQgIAKgKAJQgKAIgMAGQgNAFgNADQgOADgOAAQgOAAgOgCgAgXhZQgLAGgHANQgFANgEASQgDAUAAATQAAAYADASQAEASAGAMQAIAMAKAHQAKAGANAAQANAAAKgGQAKgGAGgMQAIgMACgSQAEgTAAgYQAAgXgEgSQgCgTgIgLQgGgNgKgGQgLgGgNAAQgNAAgKAHg");
	this.shape_18.setTransform(407.9,17);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF2D21").s().p("ABcCWIAAj0IhLD0IguAAIhKj0IAAD0Ig7AAIAAkrIBtAAIA1CyIA2iyIBtAAIAAErg");
	this.shape_19.setTransform(374.1,17);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF2D21").s().p("AgiCWIAAkrIBFAAIAAErg");
	this.shape_20.setTransform(348.3,17);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF2D21").s().p("AgiCWIAAjvIhKAAIAAg8IDZAAIAAA8IhJAAIAADvg");
	this.shape_21.setTransform(330.8,17);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF2D21").s().p("AheCWIAAkrIBIAAIAADvIB1AAIAAA8g");
	this.shape_22.setTransform(309.7,17);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF2D21").s().p("AA8CWIgTg+IhfAAIgTA+Ig9AAIBgkrIBPAAIBeErgAAZAhIgehoIggBoIA+AAg");
	this.shape_23.setTransform(283.4,17);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF2D21").s().p("Ah7CWIAAkrICLAAQAbAAAPAFQARAEANAKQANALAIAPQAHAPAAASQgBANgDAKQgDALgHAHQgHAJgKAGQgKAGgOAEIAWAGQAIAEAIAGQAMALAGAPQAHAPAAAPQAAARgIAQQgHAQgNALQgNALgUAGQgTAGgcAAgAg0BeIA0AAQAYAAALgGQAGgFAFgIQAFgJAAgJQAAgQgNgKQgNgKgWAAIg3AAgAg0geIA0AAQAWAAAIgGQANgKABgRQAAgQgLgJQgFgFgIgBIgYgCIgwAAg");
	this.shape_24.setTransform(256,17);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF2D21").s().p("AA2CWIhzjKIAAALIABANIAACyIg2AAIAAkrIBMAAIBkCvIgBgTIAAicIA2AAIAAErg");
	this.shape_25.setTransform(214.8,17);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF2D21").s().p("AgiCWIAAkrIBFAAIAAErg");
	this.shape_26.setTransform(193.7,17);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF2D21").s().p("AgiCWIAAjvIhKAAIAAg8IDZAAIAAA8IhJAAIAADvg");
	this.shape_27.setTransform(165,17);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF2D21").s().p("AgcCYQgNgDgMgGQgMgFgJgJQgKgHgIgLQgMgPgOgkQgFgTgDgpQAAgVAIgnIAKgbIAPgWQAJgLAKgIQAJgJANgFQAMgGAOgDQANgCANAAQAPAAAOACQAOADALAGQAMAFAJAIQAKAJAIALQATAgAGATQAJAoAAATQgDAogGATQgOAlgKANQgIAKgKAJQgLAIgMAGQgMAFgOADQgNADgOAAQgPAAgNgCgAgYhZQgKAGgHANQgGANgDASQgDAUgBATQABAYADASQADASAIAMQAGAMALAHQALAGALAAQAOAAAKgGQAKgGAHgMQAHgMADgSQADgTAAgYQAAgXgDgSQgDgTgHgLQgHgNgKgGQgKgGgOAAQgNAAgLAHg");
	this.shape_28.setTransform(139.6,17);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF2D21").s().p("AAuCWIAAh8IhbAAIAAB8IhFAAIAAkrIBFAAIAAB1IBbAAIAAh1IBGAAIAAErg");
	this.shape_29.setTransform(110.6,17);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF2D21").s().p("AgvCTQgVgGgRgNQgOgLgIgMQgHgMgHgWIBBgPQADAKAFAIQAGAIAHAGQAIAFAKACQAJACAKABQAXgBANgHQANgKAAgOQAAgNgMgHQgLgIgcgGQgZgFgQgGQgPgFgMgHQgSgJgKgRQgJgTAAgWQAAgUAIgSQAHgSAPgNQAQgOASgGQAUgGAXAAQAYAAAUAFQAUAHAPALQAMAIAHALQAHAKAHATIg7AUQgIgVgMgHQgLgJgWABQgRgBgKAIQgLAGAAAOQgBAMAKAHQAKAHAWAFQAhAHARAFQARAGALAHQAUANAJARQAKASAAAWQAAALgDAMQgDAMgGAKQgFAKgIAJQgJAJgKAHQgOAJgVAFQgUAFgXAAQgaAAgVgHg");
	this.shape_30.setTransform(82.2,17);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF2D21").s().p("AhqCWIAAkrIDVAAIAAA6IiOAAIAAA9IBvAAIAAA3IhvAAIAABBICOAAIAAA8g");
	this.shape_31.setTransform(46.8,17);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF2D21").s().p("AheCWIAAkrIBIAAIAADvIB1AAIAAA8g");
	this.shape_32.setTransform(22.9,17);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF2D21").s().p("AhzCWIAAkrIB0AAQAhAAASAGQASAEAQAPQAPAMAHARQAIARAAAVQAAAXgJAUQgIARgPAOQgPAMgRAFQgQAEggAAIgwAAIAABwgAgugPIAuAAQAMAAAJgCQAIgDAGgHQAKgMAAgPQAAgSgLgLQgGgGgJgCQgIgDgLAAIguAAg");
	this.shape_33.setTransform(-2,17);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF2D21").s().p("AgcCYQgNgDgMgGQgLgFgKgJQgKgHgIgLQgMgPgOgkQgFgTgDgpQAAgVAIgnIALgbIAOgWQAJgLAKgIQAJgJANgFQAMgGAOgDQAOgCAMAAQAPAAAOACQAOADALAGQALAFAKAIQAKAJAIALQATAgAGATQAKAogBATQgDAogGATQgNAlgLANQgIAKgKAJQgLAIgMAGQgMAFgOADQgOADgNAAQgPAAgNgCgAgYhZQgKAGgHANQgFANgEASQgDAUAAATQAAAYADASQAEASAGAMQAIAMAKAHQALAGALAAQAOAAAKgGQAKgGAHgMQAGgMAEgSQADgTAAgYQAAgXgDgSQgEgTgGgLQgHgNgKgGQgLgGgNAAQgNAAgLAHg");
	this.shape_34.setTransform(-31,17);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF2D21").s().p("AhqCWIAAkrIDVAAIAAA6IiNAAIAAA9IBuAAIAAA3IhuAAIAABBICNAAIAAA8g");
	this.shape_35.setTransform(-57.3,17);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF2D21").s().p("AhzCWIAAkrIB1AAQAgAAASAGQASAEAPAPQAPAMAJARQAHARAAAVQAAAXgIAUQgJARgQAOQgOAMgQAFQgSAEgfAAIgvAAIAABwgAgugPIAuAAQAMAAAIgCQAJgDAGgHQAKgMAAgPQAAgSgLgLQgGgGgIgCQgJgDgLAAIguAAg");
	this.shape_36.setTransform(-83.5,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.3,0,579.8,99.9);


(lib.nytext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AApBQIguhXIglAsIAAArIgUAAIAAifIAUAAIAABcIBHhcIAVAAIgrA5IA4Bmg");
	this.shape.setTransform(107.9,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAkBQIgdhGIgtAAIAABGIgTAAIAAifIA+AAQALAAAKAEQAJACAGAHQAIAFADAJQADAIAAAKQAAAIgCAIQgEAIgEAGIgIAFIgLAEIAfBLgAgmgEIAoAAQAJAAAGgCQAGgDAFgEQADgEADgGQACgFAAgHQAAgFgCgGQgDgEgDgEQgEgDgGgCQgGgCgHgBIgrAAg");
	this.shape_1.setTransform(92.5,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBSIgLgEQgHgDgEgEIgJgJQgGgFgDgHIgGgQIgEgQIgCgSQABgKAFgWIAFgPIAIgLQAEgHAFgDQAGgFAGgDQAGgDAGgCQAIgBAFAAIAOABQAGACAHADQAGADAFAEIAKAKIAIAMIAFAOQAEAWAAALQAAAIgBAJQgBAJgDAIQgCAIgEAIQgEAHgGAGIgJAJIgLAGIgMAEIgMABgAgRg9QgIAFgGAJQgGAJgDAMQgEANABANQgBAPAEANQADALAGAKQAGAJAJAEQAHAEAJABQAKgBAIgEQAJgFAFgJQAHgJACgMQAEgNAAgOQAAgOgEgNQgCgMgHgJQgFgJgIgEQgJgEgKgBQgIABgJAEg");
	this.shape_2.setTransform(77.1,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBQIAAhEIg2hbIAXAAIApBKIArhKIASAAIg2BbIAABEg");
	this.shape_3.setTransform(63.4,10.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAjBQIgjh7IgfB7IgUAAIgqifIAWAAIAfCBIAjiBIAOAAIAlCBIAeiBIARAAIgmCfg");
	this.shape_4.setTransform(41.3,10.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzBQIAAifIBlAAIAAARIhQAAIAAA0IA/AAIAAAPIg/AAIAAA5IBSAAIAAASg");
	this.shape_5.setTransform(25.4,10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAnBQIhRiKIAAALIAAAJIAAB2IgQAAIAAifIAZAAIBMCBIAAgLIAAgLIAAhrIAQAAIAACfg");
	this.shape_6.setTransform(10.3,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117,28.8);


(lib.nydonut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#84C2DB").s().p("AgHABQgxghg/AAIAAg/QBUAABAAvQBAAvAbBOIg9ATQgTg7gvgkg");
	this.shape.setTransform(62.7,16.3,1.684,1.684);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F4456").s().p("AhxDgQhdgwgghjQgghhAvhdQAvhdBkghQAlgMAnAAIAAA/QhNAAg3A4Qg4A3AABNQAABOA4A3QA3A3BNAAQBOAAA3g3QA3g3AAhOQAAgegJgbIA8gUQAhBigwBdQgvBdhkAgQgoANglAAQg6AAg3gcg");
	this.shape_1.setTransform(42.6,42.5,1.684,1.684);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjByQgKgDgJgIQgRgNAAgWQAAgKAGgHQAGgGAIAAQAJAAAGAFQAGAFAAAKQgIAEgDAFQgDAFgBAHQABAGACAEQACAFAFADQAJAHAQAAQARAAAMgRQAMgRAAgeQAAgdgOgRQgHgGgJgEQgHgEgMAAQgLAAgPAFIgFgEIAMhaIBGAAQAPAAAIgCQAHgDADgJIAGAAQgBANgDAJQgDAJgFAFQgGAFgIACQgIADgKAAIg+AAIgHA2QANgFAQAAQAhAAAYAVQAMAIAFANQAHANAAAPQAAANgGAMQgEALgJAKQgJALgRAFQgIADgJACQgJABgLABQgLgBgLgDg");
	this.shape_2.setTransform(52.8,41.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvBeIBRi7IAPAAIhTC7g");
	this.shape_3.setTransform(38.8,43.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBsIAAgGIATgCIAAjGIgTgDIAAgFIAsAAIAADOIATACIAAAGg");
	this.shape_4.setTransform(28.6,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85.2,85);


(lib.notext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWBPQgMgDgIgJQgHgFgEgHQgEgGgEgMIASgEQADAIAEAHQAEAGAHAEQAFAEAIACQAHACAIAAQAJAAAHgCQAHgCAFgEQAFgDACgGQADgGAAgGQAAgKgGgGQgHgHgLgDIgfgIIgQgDQgFgDgFgEQgGgGgEgIQgDgIAAgJQAAgKAEgIQADgIAIgGQAHgGAKgDQAKgDALAAQAKAAAJACQAJADAIAFQAGAFAGAHQAGAIACAKIgSAEQgBgGgCgDQgDgEgDgEQgHgFgIgDQgHgCgHgBQgHABgGABQgGACgFAEQgEAEgDAEQgDAFABAGQAAAJAFAGQAHAGAOADIAbAHQALADAIADQAIACAFAGQAFAGACAHQADAHAAAIQAAALgEAKQgEAIgIAHQgIAGgLADQgLAEgNAAQgOAAgLgEg");
	this.shape.setTransform(147.8,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAnBQIhRiKIAAALIAAAJIAAB2IgQAAIAAifIAZAAIBMCBIAAgLIAAgLIAAhrIAQAAIAACfg");
	this.shape_1.setTransform(133.4,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AArBQIgQgvIg6AAIgOAvIgRAAIA0ifIAVAAIA1CfgAAWASIgWhLIgZBLIAvAAg");
	this.shape_2.setTransform(118.6,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyBQIAAifIBkAAIAAARIhQAAIAAA0IA+AAIAAAPIg+AAIAAA5IBRAAIAAASg");
	this.shape_3.setTransform(106.2,10.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguBQIAAifIAUAAIAACNIBJAAIAAASg");
	this.shape_4.setTransform(93.9,10.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAkBQIgdhGIgsAAIAABGIgTAAIAAifIA9AAQALAAAJAEQAKACAHAHQAGAFAEAJQAEAIgBAKQAAAIgDAIQgDAIgFAGIgHAFIgLAEIAgBLgAglgEIAnAAQAJAAAGgCQAGgDAEgEQAFgEACgGQABgFAAgHQAAgFgBgGQgCgEgFgEQgDgDgHgCQgFgCgHgBIgqAAg");
	this.shape_5.setTransform(80.2,10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMBSIgMgEQgGgDgGgEIgJgJQgFgFgDgHIgGgQIgEgQIgCgSQAAgKAGgWIAFgPIAIgLQAFgHAEgDQAGgFAGgDQAGgDAHgCQAGgBAGAAIAOABQAGACAGADQAHADAFAEIAKAKIAIAMIAFAOQAEAWABALQgBAIgBAJQgBAJgDAIQgDAIgEAIQgEAHgFAGIgJAJIgLAGIgLAEIgNABgAgRg9QgIAFgGAJQgGAJgDAMQgEANAAANQAAAPAEANQADALAGAKQAGAJAIAEQAIAEAJABQAKgBAIgEQAJgFAFgJQAHgJACgMQADgNAAgOQAAgOgDgNQgCgMgHgJQgFgJgIgEQgJgEgKgBQgIABgJAEg");
	this.shape_6.setTransform(64.8,10.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAjBQIgjh7IgfB7IgVAAIgoifIAUAAIAhCBIAiiBIAOAAIAlCBIAeiBIASAAIgnCfg");
	this.shape_7.setTransform(41.3,10.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzBQIAAifIBlAAIAAARIhQAAIAAA0IA/AAIAAAPIg/AAIAAA5IBSAAIAAASg");
	this.shape_8.setTransform(25.4,10.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAnBQIhRiKIAAALIAAAJIAAB2IgQAAIAAifIAZAAIBMCBIAAgLIAAgLIAAhrIAQAAIAACfg");
	this.shape_9.setTransform(10.3,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.4,28.8);


(lib.MOSTLETHALTEXT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF2630").s().p("AidD5IAAnxIB3AAIAAGOIDEAAIAABjg");
	this.shape.setTransform(391.1,27.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CF2630").s().p("ABkD5IgfhmIifAAIggBmIhnAAICgnxICGAAICdHxgAAqA3IgziuIg2CuIBpAAg");
	this.shape_1.setTransform(347.2,27.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CF2630").s().p("ABOD5IAAjOIibAAIAADOIhzAAIAAnxIBzAAIAADCICbAAIAAjCIBzAAIAAHxg");
	this.shape_2.setTransform(300.3,27.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CF2630").s().p("Ag5D5IAAmPIh9AAIAAhiIFtAAIAABiIh8AAIAAGPg");
	this.shape_3.setTransform(257.6,27.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CF2630").s().p("AiyD5IAAnxIFkAAIAABeIjsAAIAABoIC6AAIAABbIi6AAIAABtIDsAAIAABjg");
	this.shape_4.setTransform(219.5,27.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CF2630").s().p("AidD5IAAnxIB3AAIAAGOIDEAAIAABjg");
	this.shape_5.setTransform(179.7,27.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CF2630").s().p("Ag5D5IAAmPIh9AAIAAhiIFtAAIAABiIh8AAIAAGPg");
	this.shape_6.setTransform(121.8,27.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CF2630").s().p("AhPD2QgjgKgdgWQgXgTgNgUQgNgVgLgjIBsgZQAGARAIANQAJAOAMAIQANAJAQAEQAQAEATAAQAmAAAVgOQAWgOAAgYQAAgXgTgMQgSgMgwgKQgqgJgagIQgbgJgVgNQgdgQgQgdQgPgeAAglQAAgjAMgdQANgdAagXQAZgWAggLQAggKAoAAQAoAAAhAKQAhAJAZATQAUAPAMARQAMARALAfIhiAhQgOgigTgNQgTgNgkAAQgeAAgSAMQgSALAAAVQAAAXAQALQAQALAmAIQA5AMAcAIQAbAKATANQAgAVAQAcQARAfAAAlQAAASgFAUQgFATgKARQgJASgOAPQgOAPgRALQgXAPgjAJQgiAIgmAAQgrAAgkgLg");
	this.shape_7.setTransform(80.3,27.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CF2630").s().p("AgvD9QgWgGgTgIQgUgKgQgNQgRgOgNgRQgTgZgYg8QgKgggFhFQAAgjAPhBIARgtIAYglQAOgSARgNQARgOAUgKQAUgJAXgFQAXgEAXAAQAaAAAWAEQAWAFATAJQATAJARANQAQAOAOATQAgA1AKAhQAPBCAAAiQgFBCgKAgQgXA8gSAXQgNARgRAOQgRAOgVAJQgUAJgXAFQgXAFgYAAQgYAAgWgEgAgoiWQgRALgLAVQgKAWgGAfQgGAfAAAiQAAAnAGAfQAGAfAMAUQALAVARAJQASALAVAAQAXAAARgLQAQgJALgVQALgTAGgfQAFgeAAgpQAAgngFgeQgGgfgLgVQgLgTgRgLQgRgKgXAAQgWAAgSALg");
	this.shape_8.setTransform(36,27.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CF2630").s().p("ACbD5IAAmVIh/GVIhOAAIh7mVIAAGVIhiAAIAAnxIC2AAIBYEpIBbkpIC2AAIAAHxg");
	this.shape_9.setTransform(-20.2,27.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.9,0,483.3,79.1);


(lib.map = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#070506").ss(0.3).p("AAAgMQAFAAADAEQAEAEAAAEQAAAFgEADQgDAFgFAAQgEAAgEgFQgEgDAAgFQAAgEAEgEQAEgEAEAAg");
	this.shape.setTransform(297.4,92.7,1.442,1.442);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#466898").s().p("AgIAIQgEgDAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQADAFAAADQAAAFgDADQgEAFgFAAQgEAAgEgFg");
	this.shape_1.setTransform(297.4,92.7,1.442,1.442);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#070506").ss(0.3).p("ACehgIhwgKIingZIgkDmIEoAhg");
	this.shape_2.setTransform(105.7,66,1.442,1.442);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#466898").s().p("AidBiIAkjlICnAYIBwALIgTDkg");
	this.shape_3.setTransform(105.7,66,1.442,1.442);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#070506").ss(0.3).p("AAUgzIAGAfIAJgHIAGgIIAHgCIAEgEIAEgGIAEABIAHgBIAMgJIAFgBIADACIAGADIAJAIIgBAMIgOgIIgMgEIgBAOIgBAFIgEAHIgCAEIgIAHIgBAGIgJAAIgBAHIgDAOIgHAAIgDgCIgEgHIgFAAIgBAMIgFARIgNAcIACAEIgBAHIgFAFIgDgBIgIAGIgGgCIgFAMIgMADIgGgEIgGAGIgHACIgIgCIgDgEIgGgIIgIgFIgHgHIgHgKIgCgGIgHgDIgCgFIAAgOIAFAAIAFgCIABgHIAEgEIABgNIACgKIAEgCIADADIABAFIAFgDIABgEIgDgFIAAgEIADgDIAGgJIAEgEIAFABIAGgEIAIgJIAGgKIACgpIgDgIIAGgHIAKA0g");
	this.shape_4.setTransform(277.5,96.6,1.442,1.442);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#466898").s().p("Ag6BlIgDgEIgGgIIgIgFIgHgHIgIgKIgBgGIgHgDIgCgFIgBgOIAGAAIAFgCIAAgHIAFgEIAAgNIADgKIAEgCIADADIABAEIAFgCIABgEIgDgDIAAgHIADgDIAGgJIAEgDIAFABIAGgFIAIgJIAGgKIACgoIgDgIIAGgHIAJA0IAngFIAFAfIAKgHIAGgIIAHgCIADgEIAFgGIADABIAIgBIAMgJIAFgCIADADIAGADIAJAIIgBAMIgPgIIgLgEIgBANIgBAGIgFAHIgBAEIgIAGIgBAHIgKAAIAAAHIgDANIgHAAIgEgBIgEgIIgEABIgBAMIgFARIgOAcIADADIgBAIIgFAEIgDAAIgIAGIgGgCIgGAMIgLACIgGgDIgGAGIgHACg");
	this.shape_5.setTransform(277.5,97.1,1.442,1.442);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#070506").ss(0.3).p("ABjB2IABgIIgEgLIgCgQIgDgHIAFgPIAEgHIgDgTIABgEIAFgHIABgHIgCgDIADgOIAOggIABgGIgBgDIgCACIgSAbIgFAEIgCAGIgEACIgDADIgEAAIgBgDIAEgGIAFgNIAFgEIADgGIgEgCIgEgEIgEgbIgKgDIgDgGIghgHIgHgDIgWgGIgTgDIgLgOIgBAEIgDgBIgCgDIgHgCIgDABIgEACIgDgBIACgFIAFgIIACgDIgFgEIgFACIgIAFIgTAIIgIACIgHgBIgDgDIgFAHIgBAeIgDAEIgOAKIgGAQIACAAIAGAGIACAIIgFAIIACAaIAHAIIAJAAIAFAIIAJACIAKAOIATALIAFAHIAEAcIAHAFIAAADIgFAJIAAAIIAHALIAGADIAIABIADAEIAXAAg");
	this.shape_6.setTransform(211.8,55,1.442,1.442);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#466898").s().p("AgRB+IgDgFIgIgBIgHgDIgGgKIgBgIIAGgJIgBgDIgGgFIgEgcIgGgHIgSgLIgLgPIgIgBIgFgJIgJAAIgIgIIgBgZIAEgIIgBgJIgHgFIgBAAIAGgQIAOgKIADgFIAAgdIAGgHIACADIAIABIAHgCIAUgIIAHgGIAGgBIAFADIgDAEIgFAIIgCAEIADACIAFgDIADAAIAHACIABADIADABIACgEIALAOIATADIAVAGIAHADIAhAHIAEAGIAJADIAFAbIADADIAEADIgCAGIgFAEIgGANIgDAGIAAACIAEABIADgDIAEgCIACgGIAFgFIASgbIACgBIABACIAAAHIgPAgIgDANIACAEIAAAHIgFAGIgCAFIAEATIgEAHIgFAPIADAGIABARIAFALIgBAIIheAIg");
	this.shape_7.setTransform(211.9,55,1.442,1.442);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#070506").ss(0.3).p("Ag6huIALAEIDHAzIgiCNIgBAYIhLgTIgkACIgFgEIgLAFIgLgBIgHgFIgEACIgLgBIgFgEIgNgEIgRgEIgEAEIgPgBIgNgKIABgCIAAgVIgFgKIgLgCIgBgGIgHgCIgHgBIgFADIgGgIIABgHIAHgBIAEgLIgHgCIABgIIALgCIgHgHIgEgSIACgIIAAgVIgFgIIAGgZIAGACIAGAHIAHAHIAUAKIAIACIAIAEIAJADIAGgBIAAgGIADgDIAGgEIABAIIgGABIgBAGIAFAEIAFALIADAAIABgEIgDgDIgBgJIACgEIgBgEIAAgHIAEgKIgJgTIABgCgAhThfIAFAAIABADIAEgEIAGAAIACAEIgEAFIACACIgCAFIgEABQgCAAAAAAIAEgHIgEgCIgBAEIgCACIgEgGg");
	this.shape_8.setTransform(38.7,16.1,1.442,1.442);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#466898").s().p("AAqBcIgkABIgFgEIgLAFIgKgBIgIgEIgEABIgLAAIgFgEIgNgFIgRgDIgEADIgPAAIgMgKIAAgCIABgVIgGgKIgLgCIgBgGIgHgCIgHgBIgFACIgGgHIABgIIAHgBIAEgKIgGgDIAAgIIALgBIgHgHIgDgTIABgIIAAgUIgFgJIAGgYIAGABIAGAIIAHAGIAUALIAIABIAIAEIAJADIAGAAIAAgHIADgDIAGgDIABAIIgGABIgBAFIAGAEIAEAMIAEgBIABgDIgEgEIgBgIIADgFIgCgEIAAgHIAFgJIgJgTIAAgDIAEgCIAMAEIDGAzIgiCNIgBAZgAhKhPIADgHIgEgBIgBAEIgCABIgDgGIgCgGIAFgBIABAEIAFgEIAFAAIADAEIgFAEIACACIgCAFIgDACIgCgBg");
	this.shape_9.setTransform(38.6,16,1.442,1.442);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#070506").ss(0.3).p("AgDBHIgCgPIgGgaIgCgBIgHgEIACgHIgCgGIgHgMIACgIIgCgOIgGgRIgCgMIBCgSIABAPIAFAHIAAALIgKAKIgGADIAAADIADAFIgDA5IADADIgBAMIgBAFIACAEg");
	this.shape_10.setTransform(314.3,45.4,1.442,1.442);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#466898").s().p("AgFA3IgHgaIgBgBIgIgDIACgIIgCgFIgHgMIADgIIgCgOIgHgRIgCgNIBDgRIABAPIAFAHIAAAKIgKALIgHADIAAADIADAEIgDA5IADAEIAAAMIgCAEIACAFIgaAEg");
	this.shape_11.setTransform(314.3,45.4,1.442,1.442);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#070506").ss(0.3).p("ACsAnIiZAhIhgAOIgRgBIgHAFIgTAAIgtAGIAWgNIAAgGIAEgFIAcgeIAKALIAKADIAMgGIAHADIAKgEIAFgMIAHACIAHgGIAFACIAHgKIABgGIgDgDIADgFIAOgeIACgPIADgCIAFAHIAJgBIAFgUIAHgCIADgHIAGgGIAEgGIAEgJIAAgNIAaAKQACABAAgOIAKAEIgBAHIAVAIIAEAEIgCAKIgEADIgBAFIABAGIAFAEIASAGIANACIAGAGIAIABIACADIgBAMIAEADIgBAFIADACIgBAEIgHAAIABACIAGAEIAAADIAFAFIABAHIgHADIAEAEIAQgEgACmghIAAgFIARgHIgCAJIgIAKIgBAMIABAJIgEALIgGAFIgEgLIABgOIAEgLg");
	this.shape_12.setTransform(283.8,104.3,1.442,1.442);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#466898").s().p("AiYBTIAAgFIAFgGIAcgeIAJAMIAKADIANgHIAGAEIAKgEIAGgMIAHABIAHgFIAEABIAIgKIABgFIgDgEIADgFIAOgeIACgPIACgBIAGAGIALgBIADgTIAHgCIACgHIAHgGIAEgGIADgJIABgNIAaAKQABAAAAgNIALAEIgCAGIAWAIIAEAFIgCAJIgEAEIgCAEIACAHIAFADIASAGIAMADIAHAFIAIABIACADIgBANIAEADIgCAFIAEACIgBADIgHAAIABACIAFAEIAAAEIAGAFIAAAGIgGAEIAEAEIAQgFIAJAQIiZAhIhgAOIgRgBIgHAFIgTABIgtAFgACWAAIABgNIAFgLIACgJIAAgFIARgGIgCAIIgIAKIgBAMIABAJIgFALIgFAFg");
	this.shape_13.setTransform(285,104.2,1.442,1.442);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#070506").ss(0.3).p("ABgCeIjcglIA1kXIB5AWIgKA+IBVAJg");
	this.shape_14.setTransform(76.3,91.5,1.442,1.442);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#466898").s().p("Ah8B5IA1kXIB5AWIgKA+IBVAKIgdDfg");
	this.shape_15.setTransform(76.3,91.5,1.442,1.442);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#070506").ss(0.3).p("Ah3k2ICIAFIgGBzIALAKIAFACIAEABIACgEIACADIAFABIAEgCIADABIgBAJIAdAGIAGAFIAIgEIAHABIAGAHIADABIgBAFIAIADIAIgEIADABIAHAAIABAFIAMAFIAHAAIAFgLIABAAIADAFIAdAIIAFgCIACgHIAKAAIAFACIAIgEIACAAIABADIALAAIAGgDIAFABIAEAEIAHAFIAJADIAOAIIAIgDIAFADIAEBNIACAKIAHAMIADALIAKAQIABAGIABADIgBATIgIAMIADAHIgDAaIgEAHIACAMIgPAEIgaAMIgDAFIgMAJIgDACIgWATIguAYIgEAEIgQAJIgJACIgKAOIgKABIgDAFIAGAFIgKAkIgCAMIAHAZIACAQIAFAHIgDAEIgIAFIgPgLIgOgDIgDACIgJgCIgLgIIgNgDIgUgJIgGgKIgDgRIgJgFIgBgGIABgCIABgIIgDgCIgCgDIAEgLIgFgGIgIgEIgJgLIgHgRIgLgHIAAgFIgOggIgCgLIgFgFIAAgEIgQgOIgHgIIAAgDIgGgGIgmgEIgIgGIgVAIIgGAJIgDAKIgLAPIgGAHIgHgDIgFgDIgFgBIgKgGIAAgCIgFgFIgNgFIgUgVIgGgMIAAgVIgIgRIgCgHIgEgDIgDgGIgNgFIgWgXIgDgIIgMgGIgEgMIgHgHIgFgCIgCgMICuANIAUkBIABABgACLEsIgCgSIgHgTIgCgTIAEgVIAJgSIAJgOIAJgKIABABIgYAiIgFARIgBAOIACAQIAHATIABAOIABAEg");
	this.shape_16.setTransform(147.3,168.5,1.442,1.442);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#466898").s().p("ABuEtIgPgDIgDACIgIgCIgLgIIgOgDIgUgJIgFgKIgEgRIgIgFIgCgGIACgCIABgIIgEgCIgBgDIADgLIgEgGIgIgEIgJgLIgHgRIgLgHIAAgFIgOggIgCgLIgFgFIgBgEIgPgOIgHgIIAAgDIgHgGIglgEIgIgGIgVAIIgGAJIgDAKIgMAPIgFAHIgHgDIgFgDIgFgBIgKgGIAAgCIgFgFIgNgFIgUgVIgGgMIAAgVIgIgRIgCgHIgEgDIgDgGIgNgFIgWgXIgDgIIgNgGIgDgMIgIgHIgEgCIgCgMICuANIAUkBIAEAAIgDABICLAFIgGBzIALAKIAFACIAEABIACgEIACADIAEABIAFgCIACABIAAAJIAcAGIAHAFIAIgEIAHABIAFAHIADABIAAAFIAIADIAHgEIAEABIAGAAIABAFIANAFIAGAAIAGgLIAAAAIADAFIAeAIIAFgCIACgHIAKAAIAEACIAJgEIABAAIABADIAMAAIAGgDIAFABIADAEIAIAFIAJADIAOAIIAIgDIAFADIAEBNIACAKIAGAMIAEALIAKAQIABAGIABADIgCATIgHAMIADAHIgEAaIgDAHIACAMIgQAEIgaAMIgCAFIgMAJIgEACIgVATIguAYIgFAEIgPAJIgJACIgKAOIgLABIgCAFIAGAFIgKAkIgDAMIAHAZIADAQIAFAHIgDAEIgIAFgACJEaIgIgTIgBgTIAEgVIAJgSIAJgOIAIgKIACABIgYAiIgGARIgBAOIADAQIAHATIABAOIABAEIgDAAg");
	this.shape_17.setTransform(147.4,168.5,1.442,1.442);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#070506").ss(0.3).p("AClg7Ij1AaIgKAAIAAAKIhFADIgBAQIgMAiIgBAGIgKAGIAEAKIgDALIgCACIDXgQIA4gHIAAgMIAFgEIAHgCIABgJIALgHIALgEIALgIIALgFIACgJIAMgLIABAAIABABQAAACABAAIAFAAIAGgJIAGgCIAGABIAEgJIAGgGIABgDIABgKIgEgBIgHAFg");
	this.shape_18.setTransform(242.4,126.4,1.442,1.442);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#466898").s().p("Ai7A/IACgLIgEgJIALgGIABgHIAMgiIABgPIBEgEIAAgKIALAAID1gaIAUgBIAHgEIADABIAAAKIgCACIgFAGIgFAKIgGgBIgFACIgGAJIgFgBIgCgBIAAgCIgCABIgLAKIgCAJIgMAFIgLAIIgKAEIgLAHIgBAKIgHABIgGAEIABAMIg4AHIjXAQg");
	this.shape_19.setTransform(243.2,126.4,1.442,1.442);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#070506").ss(0.3).p("ACYBnIgDgDIgEgJIAFgKIADgPIgHgFIgBgHIACgIIAFgCIABhcIgCgIIgKgJIgDgGIAAgFIAFgDIAEgFIAAgHIiUgEIiTgKIgCANIgMCXIDJANIAcgCIAVAQIAJgDIASgBIAUAHIAIAFIABAFIADAFIACgCg");
	this.shape_20.setTransform(151.4,59.4,1.442,1.442);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#466898").s().p("ACVBkIgBgFIgIgEIgUgIIgSABIgJADIgVgQIgcACIjJgNIAMiXIACgNICRAKICXAEIgBAHIgEAGIgFACIAAAGIADAFIAKAJIACAIIgBBcIgFACIgCAIIABAHIAHAFIgDAPIgFAKIAEAJIADADIgDgBIgCACg");
	this.shape_21.setTransform(150.6,59.3,1.442,1.442);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#070506").ss(0.3).p("AAWBVIgFACIgGgDIgFgPIgGgFIgFgCIgEgNIgIgPIgLgFIgFgFIgDgHIgGgFIgGgEIgGgHIgIgEIgMgFIgBgEIgHgIIgBgDIgJgOIgJAAIgKgGIgEgDIAAgFIACgFIAGgDIgBgFIAogTIA+gDIAGAFIACAIIAtgFIAIACIAhAUIAaAVIgOAPIgHAQIgBAOIgEACIgDAHIgHACIgFAJIgHAHIgGAJIgEACIgKAJIgHABIACAIIgNAPg");
	this.shape_22.setTransform(279,141.3,1.442,1.442);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#466898").s().p("AAMBUIgFgPIgGgFIgFgCIgEgNIgIgPIgLgFIgFgFIgDgHIgGgFIgGgEIgGgHIgIgEIgMgFIgBgEIgHgIIgBgDIgJgOIgJAAIgKgGIgEgDIAAgFIACgFIAGgDIgBgFIAogTIA+gDIAFAFIADAIIAtgFIAIACIAhAUIAaAVIgOAPIgHAQIgBAOIgEACIgDAHIgHACIgFAJIgHAHIgGAJIgEACIgKAJIgHABIACAIIgNAPIgGAEIgFACg");
	this.shape_23.setTransform(278.8,141.3,1.442,1.442);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#070506").ss(0.3).p("AgJAUIgBgLIgHgZIAPgEIACADIARAVIgIAEIgDgBIgDAFIgFAFg");
	this.shape_24.setTransform(326.4,62.6,1.442,1.442);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#466898").s().p("AgKAKIgGgZIAOgFIADAEIARAUIgIAFIgEgBIgDAEIgEAGIgHACg");
	this.shape_25.setTransform(326.3,62.5,1.442,1.442);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#070506").ss(0.3).p("ABkAqIAHgEIAGgCIAIgNIAJgIIAAgCIgQgKIgDgFIgHgBIgCgKIAGgDIAAgGIgDgEIAAgEIAFgIIAAgIIAGgGIABgDIgHgBIgGgFIgGgOIgIgCIgGgFIi3AlIgBgTIgOAPIgEABIgLAIIAIAwIAHAZIAKAyIDGglIAAAAg");
	this.shape_26.setTransform(290.1,77.3,1.442,1.442);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#466898").s().p("AhyAhIgHgZIgIgwIALgIIAEgBIAOgPIABATIC3glIAGAFIAIACIAGAOIAGAFIAHABIgBADIgGAGIAAAIIgFAIIAAAEIADAEIAAAGIgGADIACAKIAHABIADAFIAQAKIAAACIgJAIIgIANIgGACIgHAEIgGAEIAAAAIjGAlg");
	this.shape_27.setTransform(290.2,77.3,1.442,1.442);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#070506").ss(0.3).p("ABzCaIAbhpIAGgPIgCgDIgGAAIgEgEIACgEIABgJIAMgOIAFgBIACgDIAEgJIALgPIAJgKIABgKIgJgGIgDgMIhKgTIgpABIgBgEIgOAFIgMgBIgGgEIgEABIgMAAIgEgEIgMgFIgCAAIgLgEIgFAFIgRgBIgPgKIACgDIAAgUIgGgKIgLgCIgBgGIgHgCIgPAGIgOArIgJARIgeBJIgaAmIgFAnIAHAJICqAx");
	this.shape_28.setTransform(31,42.1,1.442,1.442);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#466898").s().p("AgmByIiIgoIgHgJIAFgnIAagmIAehJIAJgRIAOgrIAPgGIAHACIABAGIALACIAGAKIAAAUIgDADIAQAKIARABIAEgFIAMAEIACAAIALAFIAFAEIAMAAIAEgBIAFAEIANABIAOgFIABAEIApgBIBJATIAEAMIAIAGIAAAKIgKAKIgKAPIgEAJIgDADIgEADIgMAMIgCAJIgBAEIAEAEIAGAAIACADIgGAPIgbBpg");
	this.shape_29.setTransform(31,42.4,1.442,1.442);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#070506").ss(0.3).p("AAnhdIjggKIABAAIgCAbICOAHIgHBtIAAAEIALAKIAGADIACgBIACgFIADAEIAGAAIAAgDIAHADIgBALIAKAAIAFADIALACIAGAFIAGgGIAJACIAHAJIACAAIAAAGIAGACIAGgGIAFACIAGAAIADAGIAMAFIAEgCIAFgLIACAAIADAGIALACIASAGIAEgDIACgGIALAAIAGACIAHgFIADAAIACAEIAKAAIAFgGIAEACIAGAGIAIAFIAJACIAFADIgBhhIgEgbIgBgYIgDgRIgDgcg");
	this.shape_30.setTransform(156.8,134.2,1.442,1.442);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#466898").s().p("AC+BkIgIgDIgJgEIgFgHIgFgBIgEAFIgLAAIgCgEIgCAAIgIAGIgFgDIgLAAIgCAHIgFACIgRgGIgLgCIgDgFIgDAAIgFAKIgDACIgNgEIgCgHIgHAAIgFgCIgGAGIgGgCIAAgGIgCAAIgGgJIgJgBIgGAFIgHgFIgJgBIgGgDIgLgBIABgKIgHgEIAAAEIgFAAIgEgFIgCAGIgCAAIgFgDIgLgJIgBgEIAHhtIiNgHIACgbIgBgBIDgALICZAAIACAdIAEARIAAAXIAEAbIABBig");
	this.shape_31.setTransform(158.1,134,1.442,1.442);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#070506").ss(0.3).p("ABShpIgaARIgTAUIgQAEIgOAGIgGABIgHgIIgOABIgNgHIg8AJIARCSIALAAIAGgCIAJADIAFAMIAOAAIAFAGIAEgBIAHgDIAGABIAGAEIADgGIAFgDIAGgCIABAHIAOAJIAGAAIADgDIAAgEIAEgEIAAgNIADgKIAEgEIAEACIACAEIADgBIgBgGIgCgCIAAgGIAJgMIADgEIAGABIAGgEIAIgJIAGgKIACgmIgDgIIAFgHg");
	this.shape_32.setTransform(259,86.5,1.442,1.442);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#466898").s().p("AAaBrIgOgIIgBgHIgGABIgFAEIgDAFIgGgEIgHgBIgGAEIgFAAIgEgFIgOAAIgFgMIgJgEIgGACIgLAAIgRiSIA8gJIANAIIAOgCIAHAIIAFAAIAPgHIAPgDIAUgUIAagRIAMBMIgFAGIADAJIgCAlIgGAKIgIAJIgHAEIgFgBIgEAEIgIAMIAAAHIABABIABAHIgDAAIgBgDIgFgCIgEADIgCAKIAAAOIgFADIAAAEIgCADg");
	this.shape_33.setTransform(259,86.8,1.442,1.442);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#070506").ss(0.3).p("AA0BZIgDgDIgHgBIgGgFIgEgQIgJABIgGgHIi2AlIgBgRIAHgGIACgEIAFgDIAFgFIABgEIAGgHIADgCIgBgDIgDgIIgFgBIgFgQIAIgEIAWgIIAIgBIARgBIAFAEIAEAAIAFgDIAHgDIAOgBIAFgDIAFgIIAEgFIAGAAIAFgDIAAgGIgEgGIgBgEIADgFIAAgEIgEAAIgFgCIgCgDIgBgHIAPgOIACgCIALgUIANgQIAGgEIAGgEIAPgDIAIABIAggKIABANIAHARIACAOIgDAKIAHAMIACAFIgCAIIAHADIACABIAIAdIgDAoIAJArIAAAVIgDAGIAEAFIADAFIgFAEIAAAEIAEgBIAEgEIAGgGIADgCIAEACIAGAAIAVgKIAHgHIAEgEIALAEIgJAKIgdAVIghALIgDgCIAAgJIABgIIgBgFIgHgEIgWgGg");
	this.shape_34.setTransform(300.2,56.3,1.442,1.442);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#466898").s().p("ABcB+IgBgKIABgHIAAgGIgHgEIgWgFIgJgGIgDgDIgHAAIgGgFIgEgQIgJAAIgHgHIi1AmIgCgRIAHgGIADgEIAEgDIAGgFIABgEIAFgHIAEgDIgBgDIgEgIIgEAAIgFgQIAIgFIAVgHIAJgCIAQAAIAGADIADABIAGgEIAHgCIANgCIAGgCIAEgJIAFgFIAFAAIAGgDIAAgGIgEgFIgBgEIADgGIAAgEIgFAAIgEgCIgDgDIAAgGIAPgPIABgCIAMgTIANgQIAGgFIAGgDIAOgDIAJAAIAggJIABANIAGARIADANIgDALIAGALIACAGIgCAHIAIAEIABABIAJAcIgDAoIAJArIAAAVIgEAGIAFAGIACAEIgEAFIAAADIAEgBIADgDIAGgHIADgBIAFABIAGABIAVgLIAHgHIADgEIALAFIgJAJIgdAWIggAKg");
	this.shape_35.setTransform(300,56.3,1.442,1.442);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#070506").ss(0.3).p("AhkjeIB6AdIB6AZIg+FGIgEAKIgFgBIgDgHIgHgBIgEgDIgFABIgGAFIgBATIgBAEIgBAgIgEAEIgFgGIizkOg");
	this.shape_36.setTransform(44.7,92.8,1.442,1.442);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#466898").s().p("AAkDYIizkOIArinIB6AdIgBgBIB7AaIg+FGIgEAKIgFgBIgDgHIgHgBIgEgDIgFABIgGAFIgBATIgBAEIgBAgIgEAEg");
	this.shape_37.setTransform(44.7,92.7,1.442,1.442);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#070506").ss(0.3).p("AgkCWIgBgQICsANIASj+IAFABIAAgdIhUgGIi5gXIgtFEIApAFIADgag");
	this.shape_38.setTransform(106.8,138.7,1.442,1.442);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#466898").s().p("AidCgIAtlEIC6AXIBTAGIAAAdIgEgBIgSD+IitgNIACAQIhMgLIgDAag");
	this.shape_39.setTransform(106.8,138.7,1.442,1.442);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#070506").ss(0.3).p("AgOhEIgGAGIAAAIIgFAIIAAAEIADAEIgBAGIgGADIADAHIAAADIAHABIADAGIAPALIAAABIgIAHIgEAGIgEAHIgJAGIgCAJIADAGIAIAIIANAGIAIABIABAEIgDADIABAHIACAAIAGgGIACgNIAHgKIAIgRIADgPIgCgDIAAgWIgEgJIgDACIgHABIgCgCIAJgHIAAgDIgBgJIABgHIAAgGIgHgCIgUgGg");
	this.shape_40.setTransform(309.8,79.5,1.442,1.442);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#466898").s().p("AADBGIgBgIIACgCIAAgEIgJgCIgNgGIgIgHIgDgGIACgKIAJgFIAEgHIAFgGIAIgHIAAgCIgQgKIgCgHIgHgBIgBgCIgCgIIAGgCIAAgHIgDgDIABgEIAFgIIAAgJIAFgGIAKAFIAUAFIAGADIABAFIgBAIIABAIIgBADIgIAIIABABIAHgBIADgCIAEAJIABAXIABADIgCAOIgJARIgHALIgCAMIgFAHg");
	this.shape_41.setTransform(309.9,79.6,1.442,1.442);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#070506").ss(0.3).p("AAeA2IACgDIADgJIgGgCIgCgIIgKgDIgBgHIgdhiIgCAAIgCAFIgEgEIgEAFIABAcIAFAHIAAAKIgKAOIgHACIAAADIADAFIgCA5IACAEIAAALIgCAFIAEADIAvgOIAEgHg");
	this.shape_42.setTransform(323,43.6,1.442,1.442);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#466898").s().p("AgiBLIACgFIAAgLIgCgEIACg5IgDgFIAAgDIAHgCIAJgOIAAgKIgEgHIgBgcIADgFIAFAEIACgFIACAAIAdBiIABAHIAKADIACAIIAGACIgDAJIgCADIgKAEIgEAHIgvAOg");
	this.shape_43.setTransform(322.9,43.7,1.442,1.442);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#070506").ss(0.3).p("ACnA+IAEAHIAAAFIANASIkfgHIADg4IhYgHIALhxIDJALIAcgBIAFAGIANAIIADACIALgEIARgBIAFADIANAEIAIAFIABAEIADAFIAHAAIACAOIAKAhIAGAIIABANIAEALIABAR");
	this.shape_44.setTransform(153.5,81.9,1.442,1.442);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#466898").s().p("AhlBVIADg4IhYgHIAMhxIDIALIAcgBIAGAGIAMAIIADACIAMgEIARgBIAEADIAOAEIAIAFIABAEIACAFIAHAAIACAOIAKAhIAGAIIABANIAEALIACARIAEAPIAEAHIAAAFIANASg");
	this.shape_45.setTransform(153.1,81.9,1.442,1.442);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#070506").ss(0.3).p("ACVBcIgBgUIgGgTIgGg7IgFgIIgEgOIAAgbIACgKIgGgPIkAgLIgOCog");
	this.shape_46.setTransform(151.2,32.5,1.442,1.442);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#466898").s().p("AiUBNIAPioIEAALIAFAPIgBAKIAAAbIAEAOIAFAIIAGA7IAFATIABAUg");
	this.shape_47.setTransform(151.3,32.5,1.442,1.442);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#070506").ss(0.3).p("ACqhWIAFAMIAJARIAGAGIACAGIgGABIACABIgBALIgHAEIgBAFIgEAIIgJAEIgLgBIgEgEIABAEIAAACIAFAAIACAEIgFAOIALAAIACAEIAGgGIADgBIgFAKIgIAMIgDAAIgDgBIgHABIgOAHIgRAOIgJAMIgGAXIgNABIgOAEIgagWIghgTIgIgDIgqAGIgEgIIgIgFIg+ADIgoATIg4AGIACgKIAEgEIAIgCIABgKIALgHIAKgEIALgJIAMgFIABgJIALgIIABAAIABABQAAACABAAIAFAAIAGgJIAGgCIAGABIAEgJIAIgHIABgGIAAgKIAMACIA8gJICwgjgAC1AAIAGgHIAJgGIAEgCIAAgFIgBgQIgEgGIgCgFIACgBIAHAPIABALIAAAJIgJAEIgIAGIgDADg");
	this.shape_48.setTransform(284.4,123.1,1.442,1.442);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#466898").s().p("AAzBCIghgTIgIgDIgqAGIgEgIIgIgGIg+AEIgpATIg3AGIABgLIAFgEIAIgBIABgKIALgHIAKgEIALgJIAMgFIABgJIAKgIIACAAIAAABIACABIAFABIAGgKIAFgBIAGABIAFgKIAHgHIABgFIAAgLIANADIA7gJICxgjIAOgCIAEAMIAKARIAGAGIACAGIgGAAIACACIgBALIgHAEIgBAFIgEAHIgKAFIgKgBIgEgEIABAEIAAACIAEAAIADADIgFAPIALAAIABAEIAGgGIAEgBIgFAKIgJAMIgCAAIgEgCIgGACIgPAGIgRAPIgIAMIgHAXIgMABIgOADgAC0AAIAHgHIAJgGIADgCIABgFIgCgRIgDgGIgCgEIACgBIAGAOIACAMIgBAJIgJAEIgHAGIgDADg");
	this.shape_49.setTransform(284.4,123.1,1.442,1.442);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#070506").ss(0.3).p("ADaBcIAHhcQAEgdAAgLIACgmIhQgIIkcgqIhWgSIgLA4IAIATIgDAMIAEAMIAJAEIAMAcIAHAJIABADIAJACIACAEIgTAuIAAAHIAGAIIADAAIAMgIIACgDIAEACIAAAOIAHAhIAKAIIAFAGIgBAJIABAJIADADIAGgHIAHAAIAJAFIAGgDIALAAIAKAFIAHgCIABgIIAIgBIAEADIABAJIAFADIAEgeIEYAkIADgog");
	this.shape_50.setTransform(97.9,30.4,1.442,1.442);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#466898").s().p("AhFBvIgEAeIgFgDIgBgJIgEgDIgIABIgBAIIgHACIgKgFIgLAAIgGADIgJgFIgHAAIgGAHIgDgDIgBgJIABgJIgFgGIgKgIIgHghIAAgOIgEgCIgCADIgMAIIgDAAIgGgIIAAgHIATguIgCgEIgJgCIgBgDIgHgJIgMgcIgJgEIgEgMIADgMIgIgTIALg4IBWASIEcAqIBQAIIgCAmIgEAoIgHBcIgEAPIgDAog");
	this.shape_51.setTransform(97.9,30.4,1.442,1.442);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#070506").ss(0.3).p("ABQB8IgBADIgOAAIgEgCIgFgBIgSAFIgFgCIgGALIgDACIgDgHIgDgKIgJgIIADgUIgCgCIhYAEIgBgEIACgVIAXgoIgDgGIADAAIACgIIgGgFIABgEIgGgLIgBgNIAEgHIgBgMIgEgIIAEgDIgEgGIACgFIACgQIAIgHIgCgFIAKgOIAHgDIAAgGIgCgEIAHgOIAHgDIAAgIIBggGIgCCwg");
	this.shape_52.setTransform(219.1,156.1,1.442,1.442);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#466898").s().p("AAVCHIgDgKIgJgJIADgTIgCgDIhYAFIgBgFIACgVIAXgoIgDgFIADAAIACgJIgGgEIABgFIgGgKIgBgOIAEgHIgBgLIgEgIIAEgEIgEgFIACgFIACgQIAIgHIgCgGIAKgOIAHgCIAAgHIgCgDIAHgOIAHgDIAAgJIBggGIgCCxIAMBZIgBADIgOAAIgEgCIgFAAIgSAFIgFgDIgGALIgDADg");
	this.shape_53.setTransform(219.1,155.9,1.442,1.442);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#070506").ss(0.3).p("AAih0IgGgIIgDgGIinAGIgGAAIAEAHIgBAGIAPAVIAIAHIAGAAIAEADIAAAHIgFAFIgBAGIAFAJIAHAHIAGAFIAEAfIAAB1IDNgFIAGAJIgCAJIgIAGIgCAFIAOABIALgCIAEgOIACgQIAKgJIAGgDIAAgHIACgFIgDgEIgHAAIgGgHIgDgLIACgGIgFgJIgFgMIgMgCIgTgPIgEgKIACgHIAFgQIACgIIgFgCIgSgCIgDgFIAAgLIgPgJIgSgUIgGgTIgBgLg");
	this.shape_54.setTransform(199.6,108.9,1.442,1.442);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#466898").s().p("ABmCCIABgEIAJgHIABgJIgFgIIjOAFIAAh1IgDgfIgHgFIgGgHIgGgJIABgHIAFgEIAAgHIgEgDIgGgBIgIgGIgOgWIAAgFIgDgHIAGAAICngHIACAHIAHAIIgBAFIAAAMIAGATIATAUIAOAJIAAALIADAFIASABIAFADIgBAHIgGARIgCAHIAFAKIASAPIANACIAEALIAFAJIgCAHIAEALIAGAHIAHAAIACAEIgBAFIgBAHIgFADIgKAJIgCAQIgFAOIgKACg");
	this.shape_55.setTransform(199.8,108.9,1.442,1.442);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#070506").ss(0.3).p("Ah8AoIgCggIgEgRIgGg9IgFgJIgEgNIAAgbIACgKIgFgOIBPAAIAAgWIACAAIAGABIAFACIAGAeIAEAFIANAAIABAEIAQAAIAAAGIANAAIAAgEIADgCIAEgCIAEADIAHAAIAYANIAHABIABgDIAEgBIABAIIAHADIABgBIAEAAIAAAGIAHACIAIAAIAEgCIAIgIIAHgBIAEAIIACAAIADgCIAXgBIAFAIIABAAIACgDIAMgBIgCAGIgvAVIgIAHIgMATIgFACIgMANIgDABIgKAIIgHAIIgBAIIABASIgFAEIgNAKIgFAPIAHAKIABAGIgDAIIAAAKIABASIAJALIAIAAIAGAGIAJAEIAJANIATANIAFAGIAAAPIjSADIAAheIgCgIIgKgJIgDgEIAAgEg");
	this.shape_56.setTransform(191.1,41.7,1.442,1.442);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#466898").s().p("Ah2BJIgCgIIgLgJIgDgEIAAgFIAJgHIgBggIgFgRIgFg9IgGgJIgDgNIAAgbIACgKIgGgPIBPAAIABgVIACAAIAGABIAFACIAGAeIAEAFIAMAAIABADIARABIAAAGIAMAAIABgEIADgDIAEgBIAEACIAHAAIAYAOIAGABIACgDIAEgBIABAHIAHAEIABgBIADAAIAAAFIAIADIAIAAIADgCIAJgJIAHgBIADAIIADAAIADgBIAXgBIAFAIIABAAIACgDIAMgBIgCAGIgvAUIgIAIIgNATIgEACIgMANIgDABIgKAIIgHAIIgBAIIABASIgFAEIgNAKIgFAPIAGAJIACAHIgDAIIAAAKIABASIAIALIAJAAIAGAGIAJADIAJAOIATANIAEAGIABAOIjSAEg");
	this.shape_57.setTransform(191.1,41.7,1.442,1.442);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#070506").ss(0.3).p("ABbhLIACAGIAIABIAEgDQgBgEAAAAIgFgFIgJABIgBACgAiphTIABgCIAIgCIAJgGIAAgCIACgCIAPgDIAHgFIALgFIABgDIAFgIIAEgCIAEgFIAGgGIALgGIANgCIACADIAAADIgKADIgEAIIgGACIgBAGIgHAJIAAAGIACACIACgDIAKgIIADAEIAGAAIAJACIADADIAEAIIAHAHIALAAIAEgDIAEAEIAEABIADgCIADAAIAFgDIAKgJIAIgDIAQgBIATgIIAEAAIAAAPIAJADIAVgGIACgCIAEABIAAASIAJAIIADACIAEADIgEAAIgCAAIgKgCIgFACIgGgBIgJAEIgEAAIgPgDIgOAAIgFAHIgRACIgGACIgDAIIgDADIgBgBIgEgEIgMAGIgCAAIgCgEIgDABIgFALIgCALIgJASIgDgDIgDgCIgFgbIgJgEIgGgGIgggHIgHgDIgqgIgACqBYIgIgWIgGgYIgGgIIgHgFIgEADIgLAFIgFANIgHAKIgDABIgEgBQgBgBgCgBQgDgDAAgBIABgNIAJgDIAEgQIAGgEIAAgYIgFgGIgDgCIgCgGIACgCIAEABIABgEIgHgGIgEgHIgGAAIgMgEIgPgJIgHAAIgBACIgDgCIgIgGIgPALIABAKIAIACIABACIgHACIgHABIgDAEIgBAGIABAEIAAAOIgJAEIgCgBIAAgJIAEgGIABgGIgCgCIgFACIgCALIgHADIgFAFIgBAAIACACIgCAHIgGACIAAACIACAHIgDAQIgCAKIACAMIAAADIgBAHIgBACIgBAHIAQAhIADAMIgEAcIgHAOIAAAHIgHAIIBVgJIAAAEIA3gIIABgCIAAgEIAGgJIAFgFIgBgNIAEgEIADgBIABgKIAEgHIADABIAAACIACAAIAFgCgAiEifIAEgGIAGgCIAOgKIAGgCIACACIgOANIgOAHg");
	this.shape_58.setTransform(233.7,51.8,1.442,1.442);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#466898").s().p("AAECrIABgHIAGgNIAFgcIgEgNIgPghIABgHIABgCIABgGIgBgDIgBgMIACgLIADgQIgCgGIAAgDIAGgBIABgHIgBgCIAAgBIAFgFIAHgDIADgLIAFgCIACACIgCAHIgDAGIAAAJIABAAIAKgDIgBgOIgBgFIABgFIAEgFIAHgBIAHgCIgCgCIgIgCIgBgJIAQgLIAIAGIACABIACgBIAHAAIAOAJIAMADIAHAAIADAHIAHAGIAAAEIgFgBIgCADIACAFIAEACIAEAGIABAYIgGAFIgEAPIgJAEIgBANQAAAAAAAAQAAABAAAAQABABAAAAQABABABAAIADACIAEACIADgCIAHgJIAFgOIAKgEIAEgDIAHAFIAGAIIAGAYIAJAVIABAYIgFADIgCgBIgBgBIgDgCIgEAIIAAAJIgDABIgEAEIAAAOIgFAEIgFAKIgBAEIAAABIg4AJIAAgFIhUAJgAg3gLIgEgDIgFgbIgJgDIgFgGIgggHIgIgDIgqgJIgKgOIACgBIAHgCIAJgGIAAgDIACgBIAQgDIAGgFIAMgGIAAgDIAFgIIAFgCIADgEIAGgGIAMgHIAMgBIADADIgBACIgKADIgDAIIgHACIgBAHIgGAIIgBAHIACABIADgDIAJgHIAEADIAGAAIAIADIAEADIAEAIIAHAHIAKgBIAEgCIAEADIAFABIADgCIADAAIAEgCIAKgKIAJgDIAQAAIASgJIAEABIAAAPIAJACIAVgFIADgDIAEABIAAATIAIAIIAEABIADADIgDABIgCgBIgKgBIgGABIgGAAIgIAEIgFAAIgPgEIgOABIgFAHIgQABIgGACIgDAIIgDADIgCAAIgEgEIgLAGIgCAAIgDgEIgCAAIgFAMIgDAKIgIATgABchEIgBgHIgDgBIABgDIAKgBIAEAFIABAEIgDADgAiFifIAFgFIAGgCIAOgLIAGgBIABABIgNANIgPAIg");
	this.shape_59.setTransform(233.8,51.7,1.442,1.442);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#070506").ss(0.3).p("ABIgZIAFAGIAGAJIAAAFIgGALIgFABIgVAXIgDAAQgBAAgBgDIgBgDIgFABIgCAEIgHAEIgCAEIAEADIgBACIgCAHIgFAAIAAgFIAAgDIgEABIgFgJIgGAEIAEAEIABADIgDADIACAMIgEAHIgIABIgBAIIgMAIIgDABIgEgDIgIAJIACAIIgEAEIAAALIgDARIgHgDIgBgJIgKgCIgBgHIgehhIAEgBIAEABIAAgGIACgNIAGgMIAEgLIgFgGIAAgQIACgCIADgHIgBgEIAAgNIAMgkIAFgLIAEAAIADABIAAADIAEAGIAHABIACgCIAAgCIAKgIIAFgFIAEABIATAJIAXBOIAQAAIACAFIABANIAHAGIACAAIABgCIgBgDgAAjAlIAEAFQAEAAAAgBIAAgFIADgCIgCgFIgGACgAARA0IAEgEIAEADIABAGIgEADg");
	this.shape_60.setTransform(333,30.6,1.442,1.442);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#466898").s().p("AgnCAIgBgJIgKgCIgBgHIgehhIAEgBIAEABIAAgGIACgNIAHgMIADgLIgFgGIAAgQIADgCIACgHIAAgEIgBgNIAMgkIAGgLIADAAIAEABIAAADIADAGIAHABIACgCIAAgCIAKgIIAFgFIAEABIATAJIAXBOIARAAIACAFIAAANIAIAGIABAAIABgCIgBgDIAHgBIAFAGIAGAJIAAAFIgGALIgEABIgWAXIgDAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBIgBgDIgFABIgCAEIgHAEIgCAEIAEADIgBACIgCAHIgEAAIAAgFIgBgDIgEABIgFgJIgFAEIADAEIABADIgDADIACAMIgEAHIgIABIgBAIIgMAIIgDABIgEgDIgIAJIACAIIgDAEIgBALIgDARgAARA1IADgEIAEADIACAGIgFADgAAmArIgEgFIADgGIAGgCIACAFIgCACIgBAFIgCABIgCAAg");
	this.shape_61.setTransform(333.1,30.5,1.442,1.442);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#070506").ss(0.3).p("ABoALIgQAEIgQAAIgKgqIgJgaIibAfIAFAaIABAAIAMgMIAGgBIAEgEIAFgHIADACIAIgBIAGgGIAGgDIAEgCIAMAHIAFAFIADAEIALAEIAAAIIAMACIADAAIAEgDIAIADIgEAHIgCAKIgFAHIAAAGIACAEIANAEIAMAAIAIADIAFAAIADgFIgEgGIAAgEIgGgGIgGgOIAEgMIgBgGIgDgDQAEgEAAgCIABgGIAKgHIABACIgEAFIgDAJIABADIAEABIACAOIgGABIABAJIABAAIADgFIAEAFIgEADIgBAJIAHAJIAKABIAEgCIAJALIAEABIARgHIAFgKgAA8AjIADAHIAAAEIADAFIADgDIgEgOg");
	this.shape_62.setTransform(295.9,92.3,1.442,1.442);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#466898").s().p("AA/AwIgBgFIgCgHIAEgBIAFAPIgDADgABMArIgJgLIgEACIgKgCIgHgJIABgJIAEgDIgEgFIgDAFIgBABIgBgKIAGgCIgCgNIgEAAIgBgDIADgKIAEgEIgCgDIgKAIIgBAFQAAACgDAEIACAEIABAFIgDAMIAFAPIAGAFIAAAFIAFAFIgDAGIgFgBIgIgDIgMABIgOgEIgBgFIAAgFIAFgHIACgLIAEgGIgIgDIgEADIgDgBIgMgCIAAgHIgLgFIgDgEIgFgEIgMgHIgEABIgGAEIgGAFIgIABIgEgBIgEAGIgFAEIgFACIgMALIgBABIgFgaICaggIAKAbIAKAqIAQgBIAQgDIgCANIgFAKIgSAIg");
	this.shape_63.setTransform(295.9,92.1,1.442,1.442);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#070506").ss(0.3).p("AhOgLIBRgSIAFgJIAKgEIAIALIgHAOIgBAEIAFAHIADgCIAFAAIAGAGIAKAOIAKABIAGgCIAEgFIgCgGIgFgDIgEACIgDgEIACgBIAFAAIAFACIAFAEIACAIIABAGIgVAJIgKAMIgFAEIAAgDIAGgEIABgFIgCgIIgHAEIgCAEIABAGIgGADIgHgMIgJgMIgFgEIhWAUIgBgNgABDAlIAFgCIACgFIACABIADAGIgDABIgLAAgAAqAnIAGgHIAEAAIAFAEIgMAFg");
	this.shape_64.setTransform(325,57.9,1.442,1.442);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#466898").s().p("AArAoIAGgHIAEAAIAFAEIgMAFgAAmAlIAGgEIABgFIgCgIIgHAEIgCAEIABAGIgGADIgHgMIgJgMIgFgEIhWAUIgBgNIACgaIBRgSIAFgJIAKgEIAIALIgHAOIgBAEIAFAHIADgCIAFAAIAGAGIAKAOIAKABIAGgCIAEgFIgCgHIgFgCIgEACIgDgEIACgBIAFAAIAFACIAFAEIACAIIABAGIgVAJIgKAMIgFAEgABEAmIAFgCIACgFIACABIADAGIgDABIgLAAg");
	this.shape_65.setTransform(324.8,57.8,1.442,1.442);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#070506").ss(0.3).p("ABeArIgFgPIgJgJIACgSIAAgBIgDAAIgWACIg/ABIgCgEIACgXIAUgmIgCgGIAEgCIABgFIgGgGIAAgFIgFgLIgBgPIiEACIADA8IAHALIACANIAMAOIAAAJIACACIgCAUIgIANIAFAFIgCAHIgCATIgEAJIAAAJIANgEIAVgBIAbAKIARADIAKgEIAQAFIADgFIgJgDIgHABIgHgEIACgEIAIgDIAFAEIAFgCIAIABIACAGIABAHIAMAAIAFAFIgDAEIgDACIAEAEIAWAKIAKgDIACgHIAHgBIAFgEIADACIACAIIgGACIACACIAJgEIAGgJIACgBIgGgBIACgEIAAgEIAFgBIADgEIACACIAAAFQAAAEABAAIALABIALAFIADAEIAHAAIADADIAGgIIAAgEIgDAAIgJgHIgPgDIgJgGIADgHIAGABIABgBIgFgDIAAgBIAIAAIAFgIIgDgFIgBgIIgEABIgFAGIgCAGIgIgBIgCgFIAKgKg");
	this.shape_66.setTransform(208.5,169.9,1.442,1.442);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#466898").s().p("AAQBnIgEgDIADgDIADgDIgFgGIgMAAIgBgGIgCgGIgIgCIgFACIgFgDIgIACIgCAEIAHAFIAHgCIAJADIgDAGIgQgGIgKAEIgRgDIgbgKIgVABIgNAEIAAgJIAEgIIACgUIACgGIgFgGIAIgNIACgUIgCgCIAAgJIgMgOIgCgNIgHgKIgDg9ICEgCIABAPIAFAMIAAAEIAGAGIgBAFIgEACIACAGIgUAnIgCAWIACAEIA/gBIAWgCIADAAIAAACIgCASIAJAJIAFAOIABADIgKAKIACAEIAIABIACgGIAFgFIAEgBIABAHIADAFIgFAIIgIAAIAAABIAFADIgBACIgGgBIgDAGIAJAGIAPADIAJAHIADAAIAAAEIgGAIIgDgDIgHAAIgDgDIgLgGIgLgBQAAAAAAAAQAAAAgBgBQAAgBAAAAQAAgBAAgBIAAgFIgCgBIgDADIgFABIAAAFIgCADIAGABIgCACIgGAJIgJADIgCgBIAGgDIgCgHIgDgDIgFAEIgHABIgCAHIgKADg");
	this.shape_67.setTransform(208.5,169.9,1.442,1.442);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#070506").ss(0.3).p("AC8gFIgGAFIgLAKIgLAPIgFAFIAAAFIgZAPIjFAUIgKAAIgBALIhDACIAFAAIAGgFIAGgDIAAgIIACgFIgEgHIACgFIAGgEIAGgCIAQAHIADgBIABgGIgEgGIABgGIAFgEIALgDIgEgKIADgCIADgJIAIgEIAZgCIAEADIAEACIAFgGIAIgEIAFAEIACADIAFgCIAAgJIAHgEIADgCIADAEIAKAAIACgFIAAgGIAHgKIANgKIABgMIAHAAIAKgFIAHgFIgBgFIgDgEIABgGIALAAIAGgCIAIAEIAEALIAPABIAFAFIAFAAIAHgEIAIACIADAEIAHgHIAFgDIAEAAIACAHIAEACIAHAGIAAAOIACAFIAHADIACAHIAHAJIAHAHg");
	this.shape_68.setTransform(240.2,111,1.442,1.442);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#466898").s().p("AihBTIAGgFIAGgDIAAgIIACgFIgEgGIACgFIAGgFIAGgBIAQAGIADAAIABgGIgEgHIABgGIAFgEIALgDIgEgJIADgDIADgIIAIgFIAZgCIAEADIAEACIAFgGIAIgEIAFAEIACADIAFgBIAAgJIAHgEIADgCIADAEIAMAAIACgGIAAgGIAHgJIALgKIABgMIAHgBIAKgFIAHgFIgBgFIgDgDIABgGIALgBIAGgCIAIAEIAEAMIAPABIAFAEIAFABIAHgEIAIABIADAEIAHgHIAFgDIAEAAIACAHIAEADIAHAFIAAAPIACAEIAHAEIACAGIAHAKIAHAHIAKAFIgGAFIgLAJIgLAQIgFAEIAAAGIgZAOIjFAUIgKAAIgBALIhDADg");
	this.shape_69.setTransform(243.2,110.9,1.442,1.442);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#070506").ss(0.3).p("ACmBZIiagBIizgIIALioIEiAHIAIAJIAIAAIACADIAAAFIgFAEIgBAHIAGAKIAGAIIAHAFIADAdg");
	this.shape_70.setTransform(160.8,107.5,1.442,1.442);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#466898").s().p("AAMBYIizgJIALinIEiAHIAIAIIAIABIACACIAAAGIgFAEIgBAHIAGAJIAGAIIAHAGIADAdIgCBag");
	this.shape_71.setTransform(160.8,107.5,1.442,1.442);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#070506").ss(0.3).p("AhCB1IACgUIAGgHIAEgKIAHgLIgBgQIgFgHIgBgIIACgOIgKiCIAIADIAEACIADAAIAFgFIAHgFIBUgHIARCXIgBAGIADAEIAAAEIgHAEIgJAEIgIACIgCANIgMAIIgHALIABAGIgCAEIgJAAIgEgEIgLAHIAAAIIgDABIgBgDIgGgDIgJADIgEAIIgEgCIgEgEIgaADg");
	this.shape_72.setTransform(238,94.4,1.442,1.442);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#466898").s().p("AhBBjIAGgIIAFgKIAHgLIgCgPIgEgHIgBgJIACgOIgKiBIAHACIAFACIACAAIAGgFIAHgFIBUgHIAQCXIAAAGIACAFIAAADIgGAEIgJAFIgIABIgCANIgMAIIgIALIABAGIgBAFIgJAAIgEgFIgMAHIABAJIgDAAIgBgCIgHgEIgIADIgEAIIgEgCIgEgEIgaADIgIAEg");
	this.shape_73.setTransform(238.1,94.2,1.442,1.442);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#070506").ss(0.3).p("ABHBrIABgWIAGgIIAMgUIgBgOIgFgJIgBgJIACgOIgKiAIgBgCIgGgQIgEgFIgEgHIAAgOIhgAHIgWgBIAAAHIAGACIADACIABAFIAKAJIACAGIgCAJIgFAKIgCAGIgGAFIgEACIgOADIgEALIACAEIAFAEIgBALIgEAEIgCAEIAAAHIgFACIgEACIgBAEIABAGIgFADIgCAHIABAKIAGARIATAUIAPAJIgBAMIACADIARACIAHADIgCAKIgGAQIgBAIIAGAKIAQAOIAKACIAGANIAFAIIgCAIIAEALIAFAFIAFgCIACgFIAFgEIAIgDIAQAGIACAAIAAgEIgDgHIABgGIAGgEIAGgDIAEgBIgCgEIgCgFIADgEg");
	this.shape_74.setTransform(217.7,95.9,1.442,1.442);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#466898").s().p("AANCcIgDgKIACgIIgGgJIgFgNIgLgBIgQgOIgGgLIACgIIAGgPIACgKIgIgEIgRgBIgBgEIAAgLIgPgKIgTgTIgGgSIgBgJIADgIIAEgDIgBgFIABgEIAEgDIAFgBIAAgHIACgFIAFgEIAAgLIgFgEIgCgDIAEgLIAOgEIAFgCIAFgEIADgHIAEgKIACgIIgCgGIgKgJIgBgFIgCgDIgGgCIgBgGIAWABIBggIIAAAOIAFAHIADAFIAGARIABACIAKCAIgBAOIAAAIIAFAKIABANIgMAVIgFAIIgCAWIgCAIIgDADIACAGIACADIgDABIgHADIgFAEIgCAHIADAHIABADIgCABIgQgGIgJACIgFAEIgCAGIgFACg");
	this.shape_75.setTransform(217.7,95.8,1.442,1.442);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#070506").ss(0.3).p("AhPC2QgQgDgngIIAahnIAHgQIgEgGIgGAAIgCgCIABgDIABgIIAMgPIAEgBIADgDIACgIIACgCIAKgNIALgMIAAgKIgJgGIgDgMIABgZIAhiPIAiAGIgLA5IAIAUIgDAMIAFAMIAJAEIAKAaIAHAKIABADIAJADIABAGIgSAsIABAJIAHAFIAFACIANgIIABgBIAAACIABAJIAHAiIAJAHIABACIAGAGIgCAHIABAKIAFADIAGgEIAHgCIAJAEIAGgBIAKgBIALAFIAHgBIACgGIAHgEIADAKIAGAGIgXCLIgLgBg");
	this.shape_76.setTransform(67.5,39.6,1.442,1.442);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#466898").s().p("ABlDZIi0gjIg3gLIAahnIAGgQIgDgGIgHAAIgCgCIACgDIAAgIIANgPIAEgBIADgDIACgIIACgCIAKgNIAKgMIABgKIgJgGIgDgMIABgZIAhiPIAiAGIgLA5IAIAUIgDAMIAFAMIAIAEIALAaIAGAKIACADIAJADIABAGIgSAsIABAJIAHAFIAFACIAMgIIACgBIAAACIABAJIAGAiIAKAHIABACIAFAGIgCAHIACAKIAFADIAFgEIAHgCIAJAEIAHgBIAKgBIAKAFIAIgBIABgGIAIgEIACAKIAHAGIgYCLg");
	this.shape_77.setTransform(67.5,39.6,1.442,1.442);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#070506").ss(0.3).p("AByghIAAAFIAGADIADADIABADIAKAJIACAGIgGAOIgCAHIgGAFIgTAFIgEAMIACAEIAEAEIAAAKIgFAEIgCAEIAAAHIgEABIgEAEIgBAEIABAEIgEADIgGgHIgEgHIiqAGIgEABIgEgMIgBgSIgEgKIgCgOIgGgKIgCgMIgHgSIgDgOIgIgNIAFgLIADgPIgHgGIgBgHIACgGIDXgEIALAQIgFAHIACALIAGAKIAIAFIAGAAg");
	this.shape_78.setTransform(192.3,78.8,1.442,1.442);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#466898").s().p("ABQBSIgEgHIirAGIgDABIgFgMIAAgSIgEgKIgCgOIgGgKIgCgMIgHgSIgDgOIgIgNIAEgLIAEgPIgHgGIgBgHIACgGIDXgEIALAQIgFAHIACALIAGAKIAIAFIAGAAIAEAHIAAAFIAGADIADADIABADIAKAJIACAGIgHAOIgCAHIgFAFIgTAFIgEAMIABAEIAFAEIAAAKIgGAEIgBAEIAAAHIgEABIgEAEIgBAEIABAEIgEADg");
	this.shape_79.setTransform(192.3,78.6,1.442,1.442);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#070506").ss(0.3).p("AhAh6Ig5AHIABAMIABAIIAJAVIAYBYIAHAIIABAJIAFACIABAGIgFAMIgCAOIAEALIABAOIgCAHIACACIAEACIABAJIAHAKIAEAEICBgGIABAHIAHACIABgLIgFgMIADgEIAdADIgDgRIAKglIgBgHIAJgQIgCgEIgEACIgHgDIgFgPIgGgGIgHAAIgEgMIgIgRIgLgEIgFgFIgEgHIgFgFIgGgEIgGgHIgIgGIgMgFIgCgEIgGgIIgBgDIgJgNIgHAAIgLgIIgDgDIgBgFIACgFIAGgDIgCgDIAAgBg");
	this.shape_80.setTransform(264.6,150.6,1.442,1.442);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#466898").s().p("ABIB+IgBgIIiBAHIgEgFIgHgKIgBgJIgEgCIgCgBIACgHIgBgOIgEgMIACgNIAFgNIgBgFIgFgCIgBgJIgHgIIgYhYIgJgVIgBgJIgBgLIA5gIIA0gFIAAABIACADIgGADIgCAFIABAFIADADIALAIIAHAAIAJAMIABAEIAGAIIACAEIAMAEIAIAGIAGAIIAGADIAFAGIAEAHIAFAEIALAFIAIARIAEALIAHABIAGAGIAFAOIAHAEIAEgCIACAEIgJAQIABAHIgKAlIADARIgdgEIgDAFIAFAMIgBALg");
	this.shape_81.setTransform(264.6,150.5,1.442,1.442);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#070506").ss(0.3).p("ABgitIAQAtIAYApIAMAOIALAKIAEAIIgDADIgCAEIAIATIAHAIIAcAwIAEAUIABAgIACAEIgBAJIgGAEIAAAFIgBAFIACALIgHAIIgIAEIgKABIgEAEIgHACIgDgBIgDgDIgDgQIgJgOIgJgGIgKAAIgDADIgIgMIgBgJIgHgKIgFgDIgEAFIgFgBIgFgNIgIgKIgHgOIgRgSIAGgGIAIgMIAAgFIgMgCIgEABIABACIAGADIgEAJIgCACIgEgJIgEgMIgBgHIAEgNIAAgZIgHgJIgEgIIgSgFIgFgHIgJgEIgCgJIgIgDIgEgKIgLgEIgHgEIgHAAIgLADIAAAFIACACIgBADIgJAAIgJAJIgKAFIgKAAIgIADIgBgHIgEgFIgIgDIgEgDIgVgLIgUgEIgbACIgQAGIgJACIgBgVIgHgFIgEgFIAAgIIBwgNIAOABIAHAKIAEAEIAVABIBtgGIAAAHIAKACIABgMIgEgMIACgCgACkCfIAEADIAVgRIAJgKIAHgRIACgFIABgJIgCACIgGATIgJAOIgLALgACBCsIAGgCIAEAAIAEgGIAGgEIADABIAFABIABADIgVAHIgGADg");
	this.shape_82.setTransform(266.1,191,1.442,1.442);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#466898").s().p("ACCCtIAFgCIAEgBIAEgGIAGgEIADACIAFAAIABADIgUAHIgGADgAClCfIAPgIIAMgLIAIgOIAGgUIACgBIgBAJIgCAEIgHASIgJAKIgVAQgACjCIIgDgDIgCgRIgJgNIgKgGIgKgBIgDADIgIgLIgBgJIgHgLIgFgDIgDAGIgGgBIgFgNIgHgKIgIgOIgQgSIAFgGIAIgNIAAgEIgMgDIgEACIABABIAGADIgEAKIgBABIgFgIIgDgNIgBgHIADgMIAAgZIgHgKIgEgIIgSgFIgFgHIgJgEIgCgJIgIgCIgDgKIgMgEIgHgEIgHAAIgKACIgBAFIACADIgBADIgIgBIgKAJIgJAFIgKAAIgJAEIgBgHIgEgFIgIgDIgEgEIgVgKIgUgFIgbADIgQAFIgJACIgBgVIgGgFIgFgFIAAgIIBwgMIAOAAIAHALIAEAEIAVABIBtgHIAAAIIAKACIABgNIgEgMIADgBIAaACIARAsIAXApIANAPIAKAJIAEAIIgDADIgBAEIAHAUIAIAHIAcAxIADAUIABAfIACAFIgBAJIgGADIABAFIgCAFIACALIgHAJIgIAEIgKAAIgEAEIgGADg");
	this.shape_83.setTransform(266,190.9,1.442,1.442);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#070506").ss(0.3).p("AgOgWIADgLIAAgDIgDAAIgFAEIgEAEIAKAaIAJAoIALgBIAQgDIgGgTIgCABIgKgGIgEgLIgDgJIgGgDg");
	this.shape_84.setTransform(307.3,88.8,1.442,1.442);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#466898").s().p("AgNgDIgKgaIAEgDIAGgFIADABIAAADIgDALIAFAJIAGACIADAKIAFALIAJAGIADgCIAGAUIgQADIgLABg");
	this.shape_85.setTransform(307.2,88.8,1.442,1.442);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#070506").ss(0.3).p("AAmAAIgIglIhCAPIAFAaIAAAVIgCAGIAEAGIANgJIAKgJIAFgFIABABIAGgEIAOgCg");
	this.shape_86.setTransform(319,65.6,1.442,1.442);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#466898").s().p("AghAgIACgGIAAgWIgGgZIBDgPIAIAkIgSAJIgOADIgGAEIgCgCIgEAGIgKAIIgNAJg");
	this.shape_87.setTransform(319,65.6,1.442,1.442);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#070506").ss(0.3).p("AChgnIAEg4IkqggIgeDgIE5Ag");
	this.shape_88.setTransform(114.4,100.5,1.442,1.442);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#466898").s().p("AijBhIAejhIEpAhIgODgg");
	this.shape_89.setTransform(114.4,100.5,1.442,1.442);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#070506").ss(0.3).p("ACKE5IAKgBIAEgGIACgFIgJAAIgDgFIADgEIAAgQIAFgEIAHgGIABgNIAFgKIAFgFIAMgGIACgEIgDgDIgCgEIgDgNIgHgOIAAgHIi6kYIAqipIingwIgEAMIgBAUIgNAeIgIAHIgBADIgFACIgEALIgCAJIAHALIAHAUIgBARIgEAIIgCAPIgCAKIARAjIAEAKIgBAJIgBABIAAAFIAPARIgEARIAAAWIALAQIAHABIACAGIgDAJIgFAEIgDAAIgCAKIABAIIAJALIAIAbIADAIIANAWIABAHIAFADIAAAGIgDAFIgGAYIAHAHIALABIAWAKIAHAAIAIAJIAKASIAKAGIAMACIAEAFIACAJIgEABIABADIAIACIAHAAIAGANIAKALIACAGIAHALIABAIIAAAZIABAFgAhWC2IADgBIAKAFIAIAEIgCABIgMAAIgEgFgAhbC2IAEAEIgBAEIgIAAIgDgIgAggDqIAHAJIAEACIACgEIgDgFIgHgFIgDAAgAgjEBIAEAJIAEAEIgEABIgEgDIgCgFIAAgGg");
	this.shape_90.setTransform(26.4,98.5,1.442,1.442);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#466898").s().p("AAYErIgCgFIAAgZIgBgIIgGgLIgCgGIgLgLIgFgMIgHgBIgJgCIgBgCIAEgCIgBgIIgEgGIgNgCIgKgGIgKgSIgHgJIgIAAIgWgKIgLgBIgGgHIAGgXIACgGIAAgFIgEgEIgBgHIgNgWIgEgIIgIgbIgIgLIgCgHIADgKIACAAIAGgFIADgJIgDgFIgHgCIgKgQIgBgWIAFgRIgPgRIAAgFIAAgBIABgIIgDgLIgSgiIADgKIABgQIAFgIIABgRIgHgUIgHgLIACgIIAEgLIAEgDIABgCIAIgIIAOgeIAAgTIAFgNICnAwIgqCpIC6EYIgBAHIAIAOIACAOIADADIACADIgCAEIgMAGIgFAFIgEAKIgBANIgHAGIgGAEIAAAQIgCAFIADAEIAIAAIgCAGIgEAFIgJABgAgiELIgCgFIAAgFIABAAIAFAIIADAEIgEABgAgYDyIgHgJIAAgCIADgBIAHAFIACAFIgBAEgAhPC+IgEgEIgCgFIADgBIAJAGIAIADIgCABgAhgC9IgDgIIAJAAIADAFIAAADg");
	this.shape_91.setTransform(26.3,98.6,1.442,1.442);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#070506").ss(0.3).p("AiSA6IgHAGIAAAEIABADICiBgIAgAHIBCAHIAulCIjegmIgHAvIgGAIIgGAAIgEgHIgHgBIgCgDIgDAAIgHAEIgCA4IgEAGIgCAIIAHANIAEAQIACACIACACIAAAGIgEADIgJAFIgFAFIgEAJIgBALIgIAHIgGACIAAAPIgBAFIABACIAKACIgCAHIgEAFg");
	this.shape_92.setTransform(67.9,135.5,1.442,1.442);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#466898").s().p("AAqCuIgggHIiihhIgBgDIAAgDIAHgGIAKgCIAFgGIABgHIgJgBIgCgCIACgFIAAgPIAFgCIAIgHIACgLIAEgKIAEgEIAJgFIAEgDIAAgHIgCgBIgCgCIgEgQIgHgNIACgIIAEgGIACg4IAHgEIADAAIADADIAGABIAEAGIAGABIAGgIIAIgwIDdAnIguFCg");
	this.shape_93.setTransform(67.9,135.5,1.442,1.442);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#070506").ss(0.3).p("ABwhKIgKADIgRgCIACgHIAJgHIABgGIgFgIIjMAGIAFATIAAAVIADAdIABBhIAGAFIAIgEIAHADIABAbICGgDIADgFIgBgKIgFgHIAEgEIgEgHIAGgVIAGgGIgCgGIAKgOIAHgDIgBgJIAIgNIAGgDIABgJIAFgDIACgLIgDgLIAKgGg");
	this.shape_94.setTransform(201.7,138.7,1.442,1.442);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#466898").s().p("AhSBLIgHgDIgIAEIgGgFIAAhhIgEgdIAAgVIgEgTIDMgGIAEAIIgBAGIgIAHIgCAHIAQACIAKgDIgGAZIgLAGIAEALIgDALIgFADIgBAJIgGADIgHANIABAJIgHADIgKAOIACAGIgHAGIgFAVIAEAHIgEAEIAEAHIABAKIgDAFIiGADg");
	this.shape_95.setTransform(201.7,138.7,1.442,1.442);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#070506").ss(0.3).p("AhKB0IgLhaIACiwIBzgKIgBAGIADAOIAIAVIAYBZIAHAJIABAJIAFACIABAGIgFAKIgCAOIAFALIAAAOIgCAGIACACIAEADIACAGIh+ANIAAAKIAEAFIAHAFIACAUIgPAHIgHgBIAHgFIAAgCIgIgQIgGgCIgEAMIgDAHIgCgBIgHAAg");
	this.shape_96.setTransform(241.9,157.2,1.442,1.442);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#466898").s().p("AgyCNIAHgGIAAgCIgIgQIgGgBIgEALIgDAHIgCAAIgHAAIAAABIgLhaIACiwIBzgKIgBAGIADAOIAIAVIAYBaIAHAJIABAHIAFACIABAFIgFANIgCANIAFAMIAAANIgCAHIACABIAEADIACAGIh+ANIAAAKIAEAFIAHAFIACAVIgPAHg");
	this.shape_97.setTransform(241.8,154.4,1.442,1.442);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,347,218.3);


(lib.logotokill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0261C").s().p("AmUJ+IAAz6IEvAAIAAP+IH6AAIAAD8g");
	this.shape.setTransform(569.3,66.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0261C").s().p("AmUJ+IAAz6IEvAAIAAP+IH5AAIAAD8g");
	this.shape_1.setTransform(478.6,66.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0261C").s().p("AiUJ+IAAz6IEpAAIAAT6g");
	this.shape_2.setTransform(403.3,66.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0261C").s().p("ADFJ+Ij7oqIizEFIAAElIklAAIAAz6IElAAIAAJYIGOpYIEdAAIkzHHIGAMzg");
	this.shape_3.setTransform(326.1,66.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah7KFQg3gMgygWQgygYgqgiQgpgjgjgtQgwg/g9iZQgYhSgNiyQAAhbAlimIAthxIA8hhQAkgtArgjQArgiA0gYQA0gYA6gMQA6gLA9AAQBCAAA4ALQA5ALAyAYQAwAXAqAjQApAiAjAvQBTCKAZBRQAlCqAABZQgNCpgYBRQg7CagtA7QgiAsgrAjQgsAig0AZQgzAXg8AMQg7AMg/AAQg+AAg5gLgAhomBQgtAcgbA3QgaA3gOBQQgPBPgBBYQABBmAPBPQAPBNAdA1QAdAzAtAaQAtAaA4AAQA6AAAsgaQApgZAegzQAcg0ANhOQAOhNABhoQgBhngOhOQgNhNgeg0Qgcg0gqgaQgsgZg6AAQg9AAgtAbg");
	this.shape_4.setTransform(151.7,66.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiUJ+IAAv/Ik+AAIAAj7IOlAAIAAD7Ik7AAIAAP/g");
	this.shape_5.setTransform(49.5,66.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,609.6,196.8);


(lib.logoshoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiVJ+IAAv/Ik9AAIAAj7IOlAAIAAD7Ik6AAIAAP/g");
	this.shape.setTransform(509.4,66.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah7KFQg3gMgygWQgxgYgqgiQgrgjgigtQgwg/g9iZQgYhSgNiyQgBhbAmimIAthxIA8hhQAkgtArgjQAsgiAzgYQA0gYA5gMQA7gLA+AAQBBAAA4ALQA5ALAxAYQAxAXAqAjQApAiAjAvQBTCKAaBRQAkCqABBZQgOCpgXBRQg9CagsA7QgiAsgrAjQgsAig0AZQgzAXg8AMQg7AMg+AAQg+AAg6gLgAhnmBQguAcgaA3QgaA3gQBQQgPBPAABYQAABmAPBPQAPBNAeA1QAdAzAtAaQAtAaA5AAQA6AAArgaQAqgZAdgzQAbg0AOhOQAOhNAAhoQAAhngOhOQgOhNgcg0Qgcg0grgaQgrgZg7AAQg9AAgsAbg");
	this.shape_1.setTransform(407.5,66.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah6KFQg5gMgxgWQgygYgpgiQgrgjgigtQgwg/g+iZQgYhSgNiyQAAhbAlimIAthxIA9hhQAkgtAsgjQAqgiA0gYQA0gYA5gMQA7gLA9AAQBCAAA4ALQA5ALAxAYQAxAXAqAjQAqAiAiAvQBTCKAaBRQAlCqgBBZQgMCpgYBRQg8CaguA7QghAsgrAjQgsAig0AZQg0AXg6AMQg8AMg+AAQg/AAg4gLgAhnmBQgtAcgbA3QgbA3gPBQQgOBPAABYQAABmAOBPQAPBNAeA1QAdAzAtAaQAtAaA4AAQA6AAArgaQAqgZAdgzQAdg0AOhOQANhNAAhoQAAhngNhOQgOhNgdg0Qgdg0grgaQgqgZg7AAQg9AAgsAbg");
	this.shape_2.setTransform(289.9,66.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADIJ+IAAoPImOAAIAAIPIklAAIAAz6IElAAIAAHwIGOAAIAAnwIEkAAIAAT6g");
	this.shape_3.setTransform(171.2,66.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjMJ1QhbgbhIg2Qg8gwghg0Qghg0gbhdIEUg/QAOAuAVAhQAXAiAgAVQAfAXAqAKQApAKA0AAQBfAAA3gjQA3glAAg9QAAg5gvggQgwgfh9gaQhsgWhCgWQhEgWg0ghQhLgrgohMQgohLAAhfQAAhYAghLQAhhKBAg6QBBg5BRgbQBRgaBqAAQBoAABTAYQBUAYBAAxQAyAlAfAsQAeAsAeBOIj8BUQgjhWgwghQgwgghbAAQhRAAgtAdQguAeAAA2QAAA4AoAdQAoAdBmAUQCQAeBHAWQBHAYAwAgQBRA3AqBMQAqBOAABcQAAAygNAxQgNAxgZAtQgYAsgiAmQgkAmgrAbQg9AohXAWQhXAUhjAAQhwAAhbgbg");
	this.shape_4.setTransform(54.8,66.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,553.3,196.8);


(lib.lethalityratesup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5C0QgbgHgUgQQgSgOgJgPQgJgPgIgaIBPgTQAEAOAGAJQAHAKAJAGQAJAGAMADQAMADANAAQAbAAAQgKQAQgKAAgSQAAgQgOgKQgNgIgjgIQgfgGgTgHQgTgGgPgJQgWgLgLgWQgMgWAAgbQAAgZAJgWQAKgVASgRQATgQAXgIQAYgHAdAAQAdAAAYAHQAYAGATAOQAOALAJANQAJAMAJAXIhJAYQgKgZgOgJQgOgKgaAAQgWAAgNAJQgNAJAAAPQAAAQAMAIQALAJAcAGQApAIAVAHQAUAGAOAKQAXAPAMAVQAMAWAAAbQAAAOgDAOQgEAOgHANQgHANgKALQgKALgNAHQgRAMgZAGQgZAGgcAAQgfAAgagIg");
	this.shape.setTransform(182.6,83.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiBC3IAAltIEEAAIAABGIitAAIAABMICIAAIAABCIiIAAIAABQICtAAIAABJg");
	this.shape_1.setTransform(153.1,83.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_2.setTransform(128.4,83.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpC3IAAkkIhcAAIAAhJIELAAIAABJIhbAAIAAEkg");
	this.shape_3.setTransform(107.1,83.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_4.setTransform(85.7,83.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbC5QgQgEgQgGQgPgHgNgJQgNgKgKgMQgLgNgIgPQgJgPgFgRIgJglIgDgoQAAgaALgvIANggQAIgPALgNQALgOANgKQANgKAQgHQAPgHARgDQASgDASAAQATAAARADQARADAOAGQAPAHAMAKQAMAKAKANQANASAHATQAGATAFAhIhaAGQgBgdgIgRQgHgPgNgJQgNgIgSAAQgPAAgNAIQgMAIgJAPQgIAPgEAXQgEAXAAAdQAAAeAEAWQAEAWAIAOQAJAOANAHQANAGAPAAQAOAAALgEQALgEAIgJQAIgIAFgNQAGgNADgSIBTAFQgEAbgGARQgGAQgLAQQgLAPgNAKQgMALgQAHQgPAIgSADQgRAEgUAAQgRAAgRgDg");
	this.shape_5.setTransform(60.8,83.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABCC3IiNj2IABAMIABAQIAADaIhDAAIAAltIBcAAIB7DXIgBgZIAAi+IBCAAIAAFtg");
	this.shape_6.setTransform(673.9,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_7.setTransform(648.2,20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiMC3IAAltICOAAQApAAAVAGQAWAHATAQQASAPAJAWQAJAVAAAaQAAAcgKAYQgKAVgTARQgRAPgUAFQgWAGgmgBIg6AAIAACJgAg5gSIA4AAQAQAAAKgDQAKgFAIgIQAMgOAAgTQAAgVgOgNQgGgIgLgDQgKgDgPAAIg4AAg");
	this.shape_8.setTransform(611.3,20.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhACxQgdgJgTgTQgSgRgHgZQgIgZAAgoIAAjjIBdAAIAADjQAAAWADAMQACALAGAJQAHAJANAGQAOAFAPAAQASAAAPgGQAOgFAHgJQAGgIADgLIACgjIAAjjIBJAAIAADjQgCA0gGARQgDAMgHAKQgGAKgKAJQgUARgbAIQgbAJglAAQglAAgcgJg");
	this.shape_9.setTransform(575.6,20.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiBC3IAAltIEEAAIAABGIitAAIAABMICIAAIAABCIiIAAIAABQICtAAIAABJg");
	this.shape_10.setTransform(529.4,20.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA2C3Ig2iSIg9AAIAACSIhXAAIAAltICfAAQAjAAAWAGQAVAFASAOQARAOAKAYQALAWAAAaQgBATgGASQgIAUgMAOQgMAKgYAMIBDChgAg9gXIA0AAQAfAAANgHQAJgHAGgKQAGgMAAgMQAAgLgFgJQgEgJgIgHQgIgGgKgCIgggBIgyAAg");
	this.shape_11.setTransform(495.2,20.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABJC3IgXhMIh0AAIgXBMIhLAAIB1ltIBhAAIBzFtgAAfAoIglh/IgoB/IBNAAg");
	this.shape_12.setTransform(459.7,20.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag5C0QgbgHgUgQQgSgOgJgPQgJgPgIgaIBPgTQAEAOAGAJQAHAKAJAGQAJAGAMADQAMADANAAQAbAAAQgKQAQgKAAgSQAAgQgOgKQgNgIgjgIQgfgGgTgHQgTgGgPgJQgWgLgLgWQgMgWAAgbQAAgZAJgWQAKgVASgRQATgQAXgIQAYgHAdAAQAdAAAYAHQAYAGATAOQAOALAJANQAJAMAJAXIhJAYQgKgZgOgJQgOgKgaAAQgWAAgNAJQgNAJAAAPQAAAQAMAIQALAJAcAGQApAIAVAHQAUAGAOAKQAXAPAMAVQAMAWAAAbQAAAOgDAOQgEAOgHANQgHANgKALQgKALgNAHQgRAMgZAGQgZAGgcAAQgfAAgagIg");
	this.shape_13.setTransform(412.4,20.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiCC3IAAltIEEAAIAABGIisAAIAABMICHAAIAABCIiHAAIAABQICsAAIAABJg");
	this.shape_14.setTransform(382.9,20.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgpC3IAAkkIhcAAIAAhJIELAAIAABJIhbAAIAAEkg");
	this.shape_15.setTransform(352.7,20.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABJC3IgXhMIh0AAIgXBMIhLAAIB1ltIBhAAIBzFtgAAfAoIglh/IgoB/IBNAAg");
	this.shape_16.setTransform(322.4,20.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA2C3Ig2iSIg9AAIAACSIhXAAIAAltICfAAQAjAAAWAGQAVAFASAOQARAOAKAYQAKAWABAaQAAATgIASQgHAUgNAOQgLAKgZAMIBEChgAg9gXIA0AAQAgAAAMgHQAJgHAGgKQAGgMAAgMQAAgLgEgJQgFgJgIgHQgIgGgKgCIgggBIgyAAg");
	this.shape_17.setTransform(288.4,20.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgpC3IAAibIh0jSIBkAAIBECLIBGiLIBNAAIhzDSIAACbg");
	this.shape_18.setTransform(241.6,20.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgqC3IAAkkIhbAAIAAhJIELAAIAABJIhbAAIAAEkg");
	this.shape_19.setTransform(213.9,20.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_20.setTransform(192.5,20.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhzC3IAAltIBXAAIAAEkICQAAIAABJg");
	this.shape_21.setTransform(172.2,20.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABJC3IgXhMIh0AAIgXBMIhLAAIB1ltIBhAAIBzFtgAAfAoIglh/IgoB/IBNAAg");
	this.shape_22.setTransform(140.1,20.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AA5C3IAAiXIhxAAIAACXIhUAAIAAltIBUAAIAACPIBxAAIAAiPIBUAAIAAFtg");
	this.shape_23.setTransform(105.7,20.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgqC3IAAkkIhbAAIAAhJIELAAIAABJIhbAAIAAEkg");
	this.shape_24.setTransform(74.5,20.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AiBC3IAAltIEEAAIAABGIitAAIAABMICIAAIAABCIiIAAIAABQICtAAIAABJg");
	this.shape_25.setTransform(46.5,20.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhzC3IAAltIBXAAIAAEkICQAAIAABJg");
	this.shape_26.setTransform(17.3,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,693.9,122);


(lib.ladonut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#84C2DB").s().p("AgNAIQgpgWgzAAIAAg9QBEAAA2AfQA3AhAjA5Ig2AfQgagtgogYg");
	this.shape.setTransform(56.4,12.2,1.589,1.589);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F4456").s().p("Ag/DuQhigbg0hYQgzhZAbhhQAahjBZgzQA4ghBCAAIAAA+QhMAAg2A2Qg2A2AABMQAABMA2A2QA2A3BMAAQBMAAA2g3QA3g2AAhMQAAgwgZgsIA1geQA0BYgbBhQgaBjhZAzQg6Aig/AAQgfAAgigJg");
	this.shape_1.setTransform(39.4,39.3,1.589,1.589);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghBrQgJgDgJgGQgQgOAAgTQAAgLAFgGQAGgGAIAAQAIAAAGAFQAFAFAAAJQgGADgEAGQgDAFAAAGQAAAGACAEQACAEAFAEQAIAGAPAAQARAAALgQQALgRAAgcQAAgcgNgPQgGgFgJgEQgHgEgLAAQgLAAgOAEIgEgDIALhVIBBAAQAQAAAHgDQAHgCACgJIAGAAQgBANgDAIQgDAJgFAEQgFAFgIACQgHADgJAAIg7AAIgHAyQANgDAOAAQAgAAAWATQALAIAGAMQAFAMAAAPQAAAMgEAKQgFALgIAKQgJAJgPAGIgRAEQgHACgLAAQgLAAgKgEg");
	this.shape_2.setTransform(50.8,37.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtBZIBOixIANAAIhNCxg");
	this.shape_3.setTransform(37.6,39.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdBlIAAgFIASgCIAAi7IgSgCIAAgGIApAAIAADDIASACIAAAFg");
	this.shape_4.setTransform(28,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.8,78.6);


(lib.latext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMBSIgNgEQgGgDgEgDIgKgKQgEgFgEgHIgHgPIgDgRIgBgSQAAgLAEgVIAGgOIAIgNQAFgFAFgFQAFgEAGgDQAGgDAHgBQAGgCAGAAIAOACQAHABAFADQAHADAFAEIAJAKIAIAMIAGAOQAFAWgBALQAAAJgBAIQgBAJgDAIQgDAIgEAIQgDAHgGAGIgJAJIgKAGIgMAEIgNABgAgRg9QgIAFgGAJQgGAJgDAMQgDANgBANQABAPADAMQADANAGAIQAGAKAIAEQAJAFAIgBQAKABAIgFQAIgFAHgJQAGgJADgMQACgNAAgOQAAgPgCgMQgDgMgGgJQgGgJgJgEQgIgFgKABQgJgBgIAFg");
	this.shape.setTransform(174.3,6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIBSIgNgEQgLgFgIgKQgFgFgEgIQgDgHgEgIIgDgSIgCgRQAAgNAFgVIAGgOIAIgMIAJgKIALgHIAOgDQAGgCAGAAQAMAAAIADQAKADAHAHQAHAGAGAKQAFAJADANIgTAEQgDgKgDgHQgFgIgEgEQgFgEgGgDQgFgCgJAAQgIAAgIAEQgJAFgFAJQgGAJgDAMQgDAMAAAOQAAAPADAMQADAMAGAJQAGAJAIAFQAIAEAIAAQAIAAAJgEQAIgEAEgHQAGgGAGgTIASAEQgDANgEAHQgDAIgGAGQgIAJgLAGQgLAEgOAAg");
	this.shape_1.setTransform(159.9,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWBQQgMgEgIgJQgHgFgEgHQgEgGgEgMIASgEQADAJAEAFQAEAHAHAEQAFAEAIACQAHACAIAAQAJAAAHgCQAHgCAFgEQAFgEACgFQADgFAAgIQAAgJgGgHQgHgGgLgDIgfgIIgQgDQgFgDgFgEQgGgGgEgIQgDgIAAgJQAAgKAEgIQADgIAIgGQAHgGAKgDQAKgDALAAQAKAAAJACQAJADAIAFQAGAFAGAHQAGAIACAJIgSAGQgBgHgCgDQgDgFgDgDQgHgFgIgDQgHgCgHAAQgHAAgGABQgGACgFADQgEAEgDAFQgDAFABAFQAAAKAFAGQAHAFAOAEIAbAHQALADAIAEQAIACAFAFQAFAGACAHQADAHAAAJQAAAKgEAJQgEAKgIAGQgIAHgLADQgLADgNAAQgOAAgLgDg");
	this.shape_2.setTransform(145.5,6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBQIAAifIATAAIAACfg");
	this.shape_3.setTransform(136,6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBSIgNgEQgKgFgJgKQgEgFgFgIQgDgHgEgIIgDgSIgCgRQAAgNAFgVIAFgOIAJgMIAJgKIALgHIAOgDQAGgCAGAAQAMAAAJADQAJADAHAHQAHAGAGAKQAFAJADANIgTAEQgDgKgDgHQgEgIgFgEQgFgEgGgDQgFgCgJAAQgIAAgIAEQgIAFgGAJQgGAJgDAMQgDAMAAAOQAAAPADAMQADAMAGAJQAGAJAIAFQAIAEAIAAQAIAAAJgEQAIgEAEgHQAGgGAGgTIASAEQgDANgEAHQgDAIgGAGQgIAJgLAGQgLAEgOAAg");
	this.shape_4.setTransform(126.3,6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAnBQIhRiLIAAAMIAAAKIAAB1IgQAAIAAifIAZAAIBMCCIAAgMIAAgMIAAhqIAQAAIAACfg");
	this.shape_5.setTransform(111.1,6.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAqBQIgPgvIg6AAIgPAvIgRAAIA1ifIAVAAIA1CfgAAWASIgXhMIgYBMIAvAAg");
	this.shape_6.setTransform(96.4,6.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAkBQIgehGIgsAAIAABGIgTAAIAAifIA+AAQALAAAKADQAJAEAGAFQAIAHADAIQADAIABAKQAAAIgDAIQgEAIgEAGIgIAEIgLAGIAfBKgAgmgEIAoAAQAJAAAGgDQAGgCAFgEQADgEACgGQADgFAAgGQAAgGgDgFQgCgFgDgEQgFgEgFgCQgGgCgHAAIgrAAg");
	this.shape_7.setTransform(83,6.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgwBQIAAifIBhAAIAAARIhNAAIAAA0IA/AAIAAANIg/AAIAABNg");
	this.shape_8.setTransform(69.8,6.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAnBQIhRiLIAAAMIAAAKIAAB1IgQAAIAAifIAZAAIBMCCIAAgMIAAgMIAAhqIAQAAIAACfg");
	this.shape_9.setTransform(49,6.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAqBQIgPgvIg6AAIgPAvIgRAAIA1ifIAVAAIA1CfgAAWASIgXhMIgYBMIAvAAg");
	this.shape_10.setTransform(34.3,6.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWBQQgLgEgKgJQgGgFgEgHQgEgGgEgMIASgEQADAJAEAFQAFAHAGAEQAFAEAIACQAIACAGAAQAKAAAHgCQAHgCAFgEQAFgEACgFQADgFAAgIQAAgJgGgHQgGgGgMgDIgfgIIgQgDQgGgDgEgEQgHgGgDgIQgDgIAAgJQAAgKAEgIQADgIAIgGQAHgGAKgDQAKgDALAAQAKAAAJACQAJADAIAFQAGAFAGAHQAFAIADAJIgSAGQgBgHgCgDQgDgFgEgDQgFgFgIgDQgIgCgHAAQgHAAgGABQgHACgEADQgFAEgCAFQgCAFAAAFQgBAKAHAGQAFAFAPAEIAbAHQALADAIAEQAHACAGAFQAFAGADAHQACAHAAAJQAAAKgEAJQgEAKgIAGQgIAHgLADQgLADgOAAQgMAAgMgDg");
	this.shape_11.setTransform(20.6,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.8,-4,172.5,28.8);


(lib.howdidwetext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmC6IAAhRIBSAAIAABRgAgkBRIAAgLIABgjQABgOAFgJQAHgMAggaQARgMAHgLQAHgMAAgPQAAgTgMgMQgMgMgRAAQgQAAgMAIQgNAJgFAOQgFANgDAXIhJgKQAEgcAHgRQAGgQANgQQAJgLALgJQALgJANgFIAcgJIAcgDQAbAAAXAIQAXAIARAPQARAOAJAUQAJAUAAAXQAAAPgDANQgEAOgHAMQgIAMgLALIgbASQgZARgGAJQgGAKAAAWIAAAFg");
	this.shape.setTransform(512.3,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiBC3IAAltIEEAAIAABGIitAAIAABMICIAAIAABCIiIAAIAABQICtAAIAABJg");
	this.shape_1.setTransform(484.2,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA2C3Ig2iSIg9AAIAACSIhXAAIAAltICfAAQAjAAAWAGQAWAFARAOQARAOAKAYQAKAWAAAaQABATgIASQgHAUgNAOQgLAKgYAMIBDChgAg9gXIA0AAQAgAAAMgHQAJgHAGgKQAGgMAAgMQAAgLgEgJQgFgJgIgHQgIgGgKgCIgggBIgyAAg");
	this.shape_2.setTransform(449.9,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiCC3IAAltIEFAAIAABGIitAAIAABMICHAAIAABCIiHAAIAABQICtAAIAABJg");
	this.shape_3.setTransform(416.7,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA5C3IAAiXIhxAAIAACXIhUAAIAAltIBUAAIAACPIBxAAIAAiPIBUAAIAAFtg");
	this.shape_4.setTransform(382.1,20.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpC3IAAkkIhcAAIAAhJIELAAIAABJIhbAAIAAEkg");
	this.shape_5.setTransform(337.1,20.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiBC3IAAltIEDAAIAABGIisAAIAABMICIAAIAABCIiIAAIAABQICsAAIAABJg");
	this.shape_6.setTransform(309.1,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggC5QgPgDgOgHQgOgGgMgJQgMgJgLgNQgKgMgHgOIgMggQgIgWgDg2QAAgcALgyQAGgSAHgPQAIgQALgMQALgNAMgKQANgJAOgHQAPgHARgDQARgDAQAAQAdAAAYAIQAYAIASAQQATAQAMAYQAMAXAFAeIhSALQgDgWgIgPQgHgOgOgIQgOgIgRAAQgPAAgNAIQgOAIgJAQQgIAPgFAXQgFAXAAAbQAAAcAFAWQAFAWAKAOQAJAPAOAIQAOAHAQAAQAPAAAMgFQANgGAIgLQALgQAAgZIhFAAIAAhDICXAAIAADDIgnAAQgFgUgIgXQgdAegQAIQgMAFgNADIgdACQgQAAgQgDg");
	this.shape_7.setTransform(274.1,20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiBC3IAAltIEEAAIAABGIitAAIAABMICIAAIAABCIiIAAIAABQICtAAIAABJg");
	this.shape_8.setTransform(228.7,20.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA7C3Ig7jwIgEAVIg1DbIhUAAIheltIBYAAIAyDeIAEAMIACALIA8j1IBNAAIA9D1IAEgLIACgMIA1jeIBGAAIhdFtg");
	this.shape_9.setTransform(188,20.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiUC3IAAltIBvAAIAtADQAVADARAFQAQAGAOALQAOAJANAOQALANAJAPQAJAPAGARIAJAiIACAlIgCAkIgJAiIgOAgQgJAPgLANQgMANgOAKQgNAKgQAHQgRAGgSAEQgQADgVAAgAhBBzIAkAAQAWgBAOgHQAQgHALgPQAOgSAGgXQAHgWAAgWQAAgZgGgVQgHgWgNgQQgMgQgPgHQgOgHgWAAIglAAg");
	this.shape_10.setTransform(133.3,20.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_11.setTransform(106.7,20.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiVC3IAAltIBwAAIAtADQAVADARAFQAQAGAOALQAOAJANAOQALANAJAPQAJAPAFARIAJAiIAEAlIgEAkIgIAiIgOAgQgJAPgLANQgLANgOAKQgOAKgQAHQgRAGgSAEQgQADgVAAgAhABzIAjAAQAWgBAOgHQAQgHAMgPQANgSAGgXQAHgWAAgWQAAgZgHgVQgGgWgNgQQgMgQgPgHQgNgHgXAAIgkAAg");
	this.shape_12.setTransform(81.8,20.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA7C3Ig7jwIgEAVIg1DbIhUAAIheltIBYAAIAyDeIAEAMIACALIA8j1IBNAAIA9D1IAEgLIACgMIA1jeIBGAAIhdFtg");
	this.shape_13.setTransform(25.4,20.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiC5QgQgEgOgGQgPgHgMgKQgMgKgKgNQgNgSgSgsQgHgXgEgyQAAgaALgwIANggIARgcQAKgNANgKQAMgKAPgHQAPgHARgDQAQgDARAAQATAAAQADQAQADAOAHQAOAGAMAKQAMAKAKAOQAYAnAHAYQALAwAAAZQgEAwgHAXQgRAtgNARQgKANgMAKQgNAJgPAHQgOAHgRAEQgRADgRAAQgSAAgQgDgAgdhuQgNAIgHAQQgIAQgEAXQgEAXAAAYQAAAdAEAWQAEAXAJAPQAIAPANAHQANAHAPAAQAQAAANgHQAMgHAIgPQAIgPAEgWQAEgWAAgeQAAgcgEgXQgEgWgIgPQgIgPgNgHQgMgIgRAAQgQAAgNAIg");
	this.shape_14.setTransform(-16.2,20.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA5C3IAAiXIhxAAIAACXIhUAAIAAltIBUAAIAACPIBxAAIAAiPIBUAAIAAFtg");
	this.shape_15.setTransform(-51.5,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.4,0,600.3,59);


(lib.gun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F4456").s().p("AhxDLIiVgBQgHAAAAgHIAAgLQAAgHAEgBIgEAAQgQgHARgqQAMgdANgUQAOgRAfgsQATgoAAgUQAAghgsAAQgIAAADgHQACgGAOgUQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIAAgCIAAg+QAAgLALAAIAlAAIAAgSIAWAAIAKATIBxABIAAADIAEAEIByABIAAgHICHABIAHgLIAPABIAAAKIALABQADAAAEACQAEAEgBAFIAAADIAEABIAAADIAAAvIgEAAIAAAHQAAADgEAEQgFAEgCAAIgEAAIAAALQAAASgHADQgDABgXAAIhigBQgWgGAAAUIAAAoQgBAWALAFIAAAPIilgCQgGgCgLAEQgLAFgFAIQgEAFACAYQABAXgDAGQgDAFgLAOQgJALAAAGQAEAPgEAZIgCAAIADACQADADAAACIgBALQAAADgCACQAAABgBAAQAAABgBAAQAAAAgBAAQgBABAAAAIgBgBgAgygrQgCAEAAAFIgBAWQAAALAKAHQAKAJANAAIBSABQANAAAIgJQAIgHAAgLIAAgWQAAgOgHgHQgIgIgOAAIhDgBQgHAPAAAQQAAANADAHIAHANIgHAHQgEAAgOgRQgKgJgEgPQgEgLAAgIIgFAJg");
	this.shape.setTransform(27.9,20.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.8,40.8);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("AAlAAQAAAPgLALQgLALgPAAQgOAAgLgLQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOg");
	this.shape.setTransform(5.2,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.5,10.5);


(lib.dcline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AETC3QAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAEJCOQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAD+BoQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgADxBCQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgADhAdQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBgADPgFQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAC5goQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgACghIQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgACEhkQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAgABkh9QAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAkZiAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAj0iOQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgABBiQQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAjPicQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAAcifQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAipilQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAgJipQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAiAisQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgwiuQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAhYivQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape.setTransform(0,5.2,1.149,1.149,0,0,0,-27.9,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-0.5,65.3,42.6);


(lib.dctext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBSIgMgEQgKgFgIgJQgFgHgFgHQgEgHgDgJIgDgRIgCgRQAAgMAFgWIAGgOIAIgMIAJgJIAMgHIAMgFQAIgBAFAAQALAAAJADQAKAEAHAGQAHAGAGAKQAFAKADANIgTADQgDgKgDgHQgEgIgFgEQgFgFgGgCQgFgCgIAAQgJAAgIAFQgJAEgFAJQgGAIgDANQgDANAAANQAAAPADANQADALAGAJQAGAJAIAEQAIAFAIAAQAJAAAIgEQAIgEAEgHQAGgHAFgSIATAEQgEAMgDAIQgDAHgGAIQgIAIgLAFQgLAFgNAAg");
	this.shape.setTransform(179.6,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9BQIAAifIA2AAQAMAAAMAEQALAFAKAIQAGAGAEAHIAIAPQADAIACAIQABAJABAJQgCAWgEAJQgHATgGAHIgJAKIgLAHQgHADgGABIgMACgAgqA/IAiAAQAIAAAKgEQAIgDAHgGQAFgGAHgQQADgKACgSQAAgOgFgNQgDgMgJgJQgGgHgJgDQgJgEgKAAIghAAg");
	this.shape_1.setTransform(165.1,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAcIANgcIgLAAIAAgbIAYAAIAAAYIgQAfg");
	this.shape_2.setTransform(147.7,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAnBQIhRiKIAAALIAAAJIAAB2IgQAAIAAifIAZAAIBMCBIAAgLIAAgLIAAhrIAQAAIAACfg");
	this.shape_3.setTransform(136.8,10.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBSIgNgEQgGgDgFgEIgJgJQgEgFgEgHIgHgQIgDgQIgBgSQAAgKAEgWIAGgPIAIgLQAFgHAEgDQAGgFAGgDQAGgDAHgCQAGgBAGAAIAOABQAHACAFADQAHADAFAEIAKAKIAHAMIAGAOQAFAWAAALQAAAIgCAJQgBAJgDAIQgCAIgFAIQgEAHgFAGIgJAJIgKAGIgMAEIgNABgAgRg9QgIAFgGAJQgGAJgDAMQgDANgBANQABAPADANQADALAGAKQAGAJAIAEQAJAEAIABQAKgBAIgEQAIgFAHgJQAFgJAEgMQACgNAAgOQAAgOgCgNQgEgMgFgJQgGgJgJgEQgIgEgKgBQgJABgIAEg");
	this.shape_4.setTransform(121.3,10.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJBQIAAiOIguAAIAAgRIBvAAIAAARIgvAAIAACOg");
	this.shape_5.setTransform(107.9,10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKBSQgHgBgFgDQgGgCgFgEIgKgJQgFgGgDgHQgEgHgDgIQgDgHgBgJIgBgSQAAgLAFgWQACgIAEgGIAIgNQAFgGAFgEQAGgEAGgDQAHgDAHgCQAHgBAGAAQANAAALAEQALAFAIAJIAIAMQADAGADAKIgTAFIgEgNIgGgJQgGgGgIgDQgHgDgJAAQgKAAgJAFQgJAGgGAKQgFAJgCAMQgDAMAAALQAAANADAMQACAMAFAJQAGAKAKAFQAKAGAJAAQAJAAAHgDQAHgDAGgGQAFgGADgHQADgIAAgKIgBgIIgnAAIAAgQIA8AAIAABSIgNAAIgFgUIgJAJQgFAFgFACQgFADgHABIgOABg");
	this.shape_6.setTransform(93.9,10.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAnBQIhRiKIAAALIAAAJIAAB2IgQAAIAAifIAZAAIBMCBIAAgLIAAgLIAAhrIAQAAIAACfg");
	this.shape_7.setTransform(78.5,10.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJBQIAAifIASAAIAACfg");
	this.shape_8.setTransform(67.6,10.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAlBQIAAhMIhJAAIAABMIgUAAIAAifIAUAAIAABDIBJAAIAAhDIAUAAIAACfg");
	this.shape_9.setTransform(56.8,10.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWBPQgLgDgJgJQgHgFgEgHQgEgGgEgMIASgEQADAIAEAHQAEAGAHAEQAFAEAIACQAHACAIAAQAJAAAHgCQAHgCAFgEQAFgDADgGQACgGAAgGQAAgKgGgGQgGgHgNgDIgdgIIgRgDQgFgDgFgEQgGgGgEgIQgDgIAAgJQAAgKAEgIQAEgIAHgGQAHgGAKgDQAKgDALAAQAKAAAJACQAJADAIAFQAGAFAGAHQAGAIADAKIgSAEQgCgGgDgDQgCgEgDgEQgHgFgIgDQgHgCgHgBQgHABgGABQgGACgFAEQgEAEgDAEQgCAFAAAGQAAAJAFAGQAHAGAOADIAcAHQAKADAIADQAHACAGAGQAFAGACAHQADAHAAAIQAAALgEAKQgEAIgIAHQgIAGgLADQgLAEgNAAQgNAAgMgEg");
	this.shape_10.setTransform(41.9,10.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAqBQIgQgvIg5AAIgOAvIgSAAIA1ifIAVAAIA0CfgAAWASIgWhLIgaBLIAwAAg");
	this.shape_11.setTransform(28.6,10.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAjBQIgjh7IgfB7IgVAAIgoifIAUAAIAhCBIAiiBIAOAAIAlCBIAeiBIASAAIgnCfg");
	this.shape_12.setTransform(12.3,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188.7,28.8);


(lib.dcdonut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#84C2DB").s().p("AAlCbQAmhCgUhMQgThIhBgnQgrgYgzAAIAAg/QBnAABHBJQBJBJAABlQAABCghA6g");
	this.shape.setTransform(42.9,21.4,1.148,1.148);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F4456").s().p("AhqDXQhZg0gbhkQgahhAzhZQAig8A5ggQA4ghBCAAIAAA/QhLAAg3A2Qg2A3AABMQAABNA2A3QA3A2BLAAQA0AAAqgZQAqgYAagtIA2AgQg0BZhjAbQgiAJghAAQg9AAg7gig");
	this.shape_1.setTransform(26.7,28.6,1.148,1.148);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVBLQgIgDgGgFQgMgJAAgOQAAgIAEgEQAFgFAFAAQAGAAAEAEQAEADAAAHQgFACgCAEQgDAEAAAFQAAAEACADQABADAEACQAGAFAMAAQAKAAAIgKQAIgKAAgSQAAglgpgDIAAgEQATgBAJgJQALgJAAgQQAAgNgHgHQgEgEgEgCQgEgBgEAAQgKAAgGADQgGAEAAAGQAAAEACAEQADADAEADQAAAGgDADQgEAEgGAAQgFAAgEgFQgEgEAAgHQAAgGADgFQADgFAGgEQAGgEAIgDQAIgCAIAAQAIAAAIADQAIACAGAEQAGAEACAGQADAGAAAIQAAAPgLAJQgLAJgUADIAAABQAVABAOAJQAOALAAATQAAAJgEAIQgDAIgIAGQgOAMgYAAQgJAAgHgCg");
	this.shape_2.setTransform(35.7,28);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggBAIA3h/IAKAAIg3B/g");
	this.shape_3.setTransform(26,29);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVBJIAAgEIAOgCIAAiGIgOgBIAAgEIAeAAIAACLIAMACIAAAEg");
	this.shape_4.setTransform(19.1,28.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.2,57.2);


(lib.CITIESINUSTEXT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoApIAAhRIBRAAIAABRg");
	this.shape.setTransform(373.9,44.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5C0QgbgHgUgQQgSgOgJgPQgJgPgIgaIBPgTQAEAOAGAJQAHAKAJAGQAJAGAMADQAMADANAAQAbAAAQgKQAQgKAAgSQAAgQgOgKQgNgIgjgIQgfgGgTgHQgTgGgPgJQgWgLgLgWQgMgWAAgbQAAgZAJgWQAKgVASgRQATgQAXgIQAYgHAdAAQAdAAAYAHQAYAGATAOQAOALAJANQAJAMAJAXIhJAYQgKgZgOgJQgOgKgaAAQgWAAgNAJQgNAJAAAPQAAAQAMAIQALAJAcAGQApAIAVAHQAUAGAOAKQAXAPAMAVQAMAWAAAbQAAAOgDAOQgEAOgHANQgHANgKALQgKALgNAHQgRAMgZAGQgZAGgcAAQgfAAgagIg");
	this.shape_1.setTransform(349.8,30.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoApIAAhRIBRAAIAABRg");
	this.shape_2.setTransform(327.8,44.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhACxQgdgJgTgTQgSgRgHgZQgIgZAAgoIAAjjIBdAAIAADjQAAAWADAMQACALAGAJQAHAJANAGQAOAFAPAAQASAAAPgGQAOgFAHgJQAGgIADgLIACgjIAAjjIBJAAIAADjQgCA0gGARQgDAMgHAKQgGAKgKAJQgUARgbAIQgbAJglAAQglAAgcgJg");
	this.shape_3.setTransform(303,30.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiCC3IAAltIEEAAIAABGIisAAIAABLICHAAIAABDIiHAAIAABRICsAAIAABIg");
	this.shape_4.setTransform(256.8,30.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA5C3IAAiXIhxAAIAACXIhUAAIAAltIBUAAIAACPIBxAAIAAiPIBUAAIAAFtg");
	this.shape_5.setTransform(222.2,30.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqC3IAAkkIhbAAIAAhJIELAAIAABJIhaAAIAAEkg");
	this.shape_6.setTransform(190.9,30.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABCC3IiNj2IABAMIABAQIAADaIhDAAIAAltIBcAAIB7DXIgBgZIAAi+IBCAAIAAFtg");
	this.shape_7.setTransform(146,30.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_8.setTransform(120.3,30.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag5C0QgbgHgUgQQgSgOgJgPQgJgPgIgaIBPgTQAEAOAGAJQAHAKAJAGQAJAGAMADQAMADANAAQAbAAAQgKQAQgKAAgSQAAgQgOgKQgNgIgjgIQgfgGgTgHQgTgGgPgJQgWgLgLgWQgMgWAAgbQAAgZAJgWQAKgVASgRQATgQAXgIQAYgHAdAAQAdAAAYAHQAYAGATAOQAOALAJANQAJAMAJAXIhJAYQgKgZgOgJQgOgKgaAAQgWAAgNAJQgNAJAAAPQAAAQAMAIQALAJAcAGQApAIAVAHQAUAGAOAKQAXAPAMAVQAMAWAAAbQAAAOgDAOQgEAOgHANQgHANgKALQgKALgNAHQgRAMgZAGQgZAGgcAAQgfAAgagIg");
	this.shape_9.setTransform(81.6,30.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiBC3IAAltIEEAAIAABGIitAAIAABLICIAAIAABDIiIAAIAABRICtAAIAABIg");
	this.shape_10.setTransform(52.1,30.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_11.setTransform(27.4,30.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpC3IAAkkIhcAAIAAhJIELAAIAABJIhaAAIAAEkg");
	this.shape_12.setTransform(6,30.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_13.setTransform(-15.3,30.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbC5QgQgEgQgGQgPgHgNgJQgNgKgKgMQgLgNgIgPQgJgPgFgRIgJglIgDgoQAAgaALgvIANggQAIgPALgNQALgOANgKQANgKAQgHQAPgHARgDQASgDASAAQATAAARADQARADAOAGQAPAHAMAKQAMAKAKANQANASAHATQAGATAFAhIhaAGQgBgdgIgRQgHgPgNgJQgNgIgSAAQgPAAgNAIQgMAIgJAPQgIAPgEAXQgEAXAAAdQAAAeAEAWQAEAWAIAOQAJAOANAHQANAGAPAAQAOAAALgEQALgEAIgJQAIgIAFgNQAGgNADgSIBTAFQgEAbgGARQgGAQgLAQQgLAPgNAKQgMALgQAHQgPAIgSADQgRAEgUAAQgRAAgRgDg");
	this.shape_14.setTransform(-40.2,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.8,10,442.8,59);


(lib.chitext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBSIgLgEQgHgDgEgEIgJgJQgGgFgDgHIgGgQIgEgQIgCgSQABgKAFgWIAFgPIAIgLQAEgHAFgDQAGgFAGgDQAGgDAGgCQAIgBAFAAIAOABQAGACAHADQAGADAFAEIAKAKIAIAMIAFAOQAEAWAAALQAAAIgBAJQgBAJgDAIQgCAIgEAIQgEAHgGAGIgJAJIgLAGIgMAEIgMABgAgRg9QgIAFgGAJQgGAJgDAMQgEANABANQgBAPAEANQADALAGAKQAGAJAJAEQAHAEAJABQAKgBAIgEQAJgFAFgJQAHgJACgMQAEgNAAgOQAAgOgEgNQgCgMgHgJQgFgJgIgEQgJgEgKgBQgIABgJAEg");
	this.shape.setTransform(88.4,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKBSQgHgBgFgDQgGgCgFgEIgKgJQgFgGgDgHQgEgHgDgIQgDgHgBgJIgBgSQAAgLAFgWQACgIAEgGIAIgNQAFgGAFgEQAGgEAGgDQAHgDAHgCQAHgBAGAAQANAAALAEQALAFAIAJIAIAMQADAGADAKIgTAFIgEgNIgGgJQgGgGgIgDQgHgDgJAAQgKAAgJAFQgJAGgGAKQgFAJgCAMQgDAMAAALQAAANADAMQACAMAFAJQAGAKAKAFQAKAGAJAAQAJAAAHgDQAHgDAGgGQAFgGADgHQADgIAAgKIgBgIIgnAAIAAgQIA8AAIAABSIgNAAIgFgUIgJAJQgFAFgFACQgFADgHABIgOABg");
	this.shape_1.setTransform(72.7,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAqBQIgQgvIg5AAIgPAvIgRAAIA1ifIAVAAIA0CfgAAWASIgXhLIgZBLIAwAAg");
	this.shape_2.setTransform(58.4,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBSIgLgEQgMgFgHgJQgGgHgDgHQgFgHgCgJIgFgRIgBgRQAAgMAFgWIAFgOIAIgMIAKgJIAMgHIAMgFQAIgBAFAAQALAAAKADQAJAEAHAGQAIAGAEAKQAGAKADANIgTADQgDgKgEgHQgEgIgEgEQgFgFgGgCQgGgCgHAAQgIAAgJAFQgJAEgFAJQgGAIgDANQgDANAAANQAAAPADANQADALAGAJQAGAJAIAEQAIAFAIAAQAIAAAJgEQAIgEAFgHQAFgHAFgSIATAEQgEAMgDAIQgEAHgFAIQgIAIgLAFQgLAFgNAAg");
	this.shape_3.setTransform(45.2,10.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBQIAAifIASAAIAACfg");
	this.shape_4.setTransform(34.9,10.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAlBQIAAhMIhJAAIAABMIgUAAIAAifIAUAAIAABDIBJAAIAAhDIAUAAIAACfg");
	this.shape_5.setTransform(24.2,10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIBSIgNgEQgKgFgJgJQgEgHgFgHQgDgHgEgJIgEgRIgBgRQAAgMAFgWIAGgOIAIgMIAJgJIALgHIAOgFQAGgBAGAAQAMAAAJADQAJAEAHAGQAHAGAGAKQAFAKADANIgTADQgDgKgDgHQgEgIgFgEQgFgFgGgCQgFgCgJAAQgIAAgIAFQgIAEgGAJQgGAIgDANQgDANAAANQAAAPADANQADALAGAJQAGAJAIAEQAIAFAIAAQAIAAAJgEQAIgEAEgHQAFgHAHgSIASAEQgDAMgEAIQgDAHgGAIQgIAIgLAFQgLAFgOAAg");
	this.shape_6.setTransform(9.7,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.4,28.8);


(lib.chidonut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#84C2DB").s().p("AhegCIAAg+QBzAABKBaIgvAnQg2hDhYAAg");
	this.shape.setTransform(59.1,11.3,1.723,1.723);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F4456").s().p("AgYD1QhmgLhBhPQg/hQAKhjQALhmBPhAQBEg3BWAAIAAA+QhLAAg2A2Qg3A2AABLQAABMA3A2QA2A2BLAAQBMAAA2g2QA2g2AAhMQAAhAgogzIAvgnQBABQgKBjQgLBmhPBAQhEA3hVAAIgagBg");
	this.shape_1.setTransform(42.6,42.5,1.723,1.723);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBrQgPgJgJgQQgHgQgEgVQgEgWAAgZQAAgbAFgWQAGgUALgPQAVgdAkAAQANAAALAEQALACAIAFQASALAAAQQAAAKgGAGQgGAGgIABQgJgBgEgEQgFgEAAgHQAHgHAAgJQAAgJgIgHQgEgDgGgCQgFgCgHAAQgVAAgMATQgMASAAAkIAAAfQARgUAbgBQAeAAATATQAKAHAFAOQAFANAAAQQAAAigWATQgLAKgNAEQgNAGgPgBQgUAAgOgIgAgJgRIgMAGQgMAHgGALIAAAmIAAABQAAA/AnAAQATAAALgNQAFgIADgJQACgKAAgNIAAgbQAAgXgJgMQgFgHgHgDQgHgDgKAAQgFAAgGACg");
	this.shape_2.setTransform(53.9,42);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxBgIBUi/IAOAAIhTC/g");
	this.shape_3.setTransform(38.8,43.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBuIAAgFIATgDIAAjKIgTgDIAAgGIAsAAIAADTIATADIAAAFg");
	this.shape_4.setTransform(28.3,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85.1,85.1);


(lib.butbaltimoretext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0261C").s().p("AhzC3IAAltIBXAAIAAEkICQAAIAABJg");
	this.shape.setTransform(467.6,146.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0261C").s().p("ABJC3IgXhMIh0AAIgXBMIhLAAIB1ltIBhAAIBzFtgAAfAoIglh/IgoB/IBNAAg");
	this.shape_1.setTransform(436.4,146.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0261C").s().p("AA5C3IAAiXIhxAAIAACXIhUAAIAAltIBUAAIAACPIBxAAIAAiPIBUAAIAAFtg");
	this.shape_2.setTransform(403,146.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0261C").s().p("AgpC3IAAkkIhcAAIAAhJIELAAIAABJIhbAAIAAEkg");
	this.shape_3.setTransform(372.7,146.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0261C").s().p("AiCC3IAAltIEFAAIAABGIitAAIAABMICHAAIAABCIiHAAIAABQICtAAIAABJg");
	this.shape_4.setTransform(345.6,146.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0261C").s().p("AhzC3IAAltIBXAAIAAEkICQAAIAABJg");
	this.shape_5.setTransform(317.4,146.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0261C").s().p("AgqC3IAAkkIhbAAIAAhJIELAAIAABJIhbAAIAAEkg");
	this.shape_6.setTransform(276.9,146.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0261C").s().p("Ag5C0QgbgHgUgQQgSgOgJgPQgJgPgIgaIBPgTQAEAOAGAJQAHAKAJAGQAJAGAMADQAMADANAAQAbAAAQgKQAQgKAAgSQAAgQgOgKQgNgIgjgIQgfgGgTgHQgTgGgPgJQgWgLgLgWQgMgWAAgbQAAgZAJgWQAKgVASgRQATgQAXgIQAYgHAdAAQAdAAAYAHQAYAGATAOQAOALAJANQAJAMAJAXIhJAYQgKgZgOgJQgOgKgaAAQgWAAgNAJQgNAJAAAPQAAAQAMAIQALAJAcAGQApAIAVAHQAUAGAOAKQAXAPAMAVQAMAWAAAbQAAAOgDAOQgEAOgHANQgHANgKALQgKALgNAHQgRAMgZAGQgZAGgcAAQgfAAgagIg");
	this.shape_7.setTransform(247.4,146.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0261C").s().p("AgiC5QgQgEgOgGQgPgHgMgKQgMgKgKgNQgNgSgSgsQgHgXgEgyQAAgaALgwIANggIARgcQAKgNANgKQAMgKAPgHQAPgHARgDQAQgDARAAQATAAAQADQAQADAOAHQAOAGAMAKQAMAKAKAOQAYAnAHAYQALAwAAAZQgEAwgHAXQgRAtgNARQgKANgMAKQgNAJgPAHQgOAHgRAEQgRADgRAAQgSAAgQgDgAgdhuQgNAIgHAQQgIAQgEAXQgEAXAAAYQAAAdAEAWQAEAXAJAPQAIAPANAHQANAHAPAAQAQAAANgHQAMgHAIgPQAIgPAEgWQAEgWAAgeQAAgcgEgXQgEgWgIgPQgIgPgNgHQgMgIgRAAQgQAAgNAIg");
	this.shape_8.setTransform(215.8,146.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0261C").s().p("ABxC3IAAkpIhcEpIg5AAIhakpIAAEpIhIAAIAAltICFAAIBADZIBDjZICFAAIAAFtg");
	this.shape_9.setTransform(175.6,146.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiBC3IAAltIEEAAIAABGIitAAIAABMICIAAIAABCIiIAAIAABQICtAAIAABJg");
	this.shape_10.setTransform(551.6,83.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA5C3IAAiXIhxAAIAACXIhUAAIAAltIBUAAIAACPIBxAAIAAiPIBUAAIAAFtg");
	this.shape_11.setTransform(517.9,83.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgqC3IAAkkIhbAAIAAhJIELAAIAABJIhaAAIAAEkg");
	this.shape_12.setTransform(487.6,83.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AggC5QgQgDgOgHQgOgGgLgJQgMgJgLgNQgKgMgHgOIgMggQgIgWgDg2QAAgcALgyQAGgSAHgPQAJgQAKgMQALgNAMgKQANgJAOgHQAPgHAQgDQASgDAQAAQAdAAAYAIQAYAIASAQQATAQAMAYQAMAXAFAeIhSALQgDgWgIgPQgIgOgNgIQgOgIgRAAQgPAAgNAIQgOAIgJAQQgIAPgFAXQgFAXAAAbQAAAcAFAWQAFAWAJAOQAKAPAOAIQAOAHAQAAQAPAAAMgFQANgGAIgLQALgQAAgZIhFAAIAAhDICXAAIAADDIgnAAQgEgUgJgXQgdAegRAIQgLAFgNADIgdACQgQAAgQgDg");
	this.shape_13.setTransform(444.1,83.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABCC3IiNj2IABAMIABAQIAADaIhDAAIAAltIBcAAIB7DXIgBgZIAAi+IBCAAIAAFtg");
	this.shape_14.setTransform(410.2,83.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiC5QgQgEgOgGQgPgHgMgKQgMgKgKgNQgNgSgSgsQgHgXgEgyQAAgaALgwIANggIARgcQAKgNANgKQAMgKAPgHQAPgHARgDQAQgDARAAQATAAAQADQAQADAOAHQAOAGAMAKQAMAKAKAOQAYAnAHAYQALAwAAAZQgEAwgHAXQgRAtgNARQgKANgMAKQgNAJgPAHQgOAHgRAEQgRADgRAAQgSAAgQgDgAgdhuQgNAIgHAQQgIAQgEAXQgEAXAAAYQAAAdAEAWQAEAXAJAPQAIAPANAHQANAHAPAAQAQAAANgHQAMgHAIgPQAIgPAEgWQAEgWAAgeQAAgcgEgXQgEgWgIgPQgIgPgNgHQgMgIgRAAQgQAAgNAIg");
	this.shape_15.setTransform(375.8,83.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABxC3IAAkpIhcEpIg5AAIhakpIAAEpIhIAAIAAltICFAAIBADZIBDjZICFAAIAAFtg");
	this.shape_16.setTransform(335.6,83.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABJC3IgXhMIh0AAIgXBMIhLAAIB1ltIBhAAIBzFtgAAfAoIglh/IgoB/IBNAAg");
	this.shape_17.setTransform(296,83.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AiUC3IAAltIBvAAIAtADQAVADARAGQAQAFAOALQAOAJANAOQALANAJAPQAJAPAGAQIAJAjIACAlIgCAkIgJAiIgOAgQgJAPgLANQgMANgOAKQgNAKgQAHQgRAGgSAEQgQADgVAAgAhBBzIAkAAQAWgBAOgHQAQgHALgPQAOgSAGgXQAHgWAAgWQAAgZgGgVQgHgWgNgQQgMgQgPgHQgOgHgWAAIglAAg");
	this.shape_18.setTransform(250.7,83.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiCC3IAAltIEEAAIAABGIisAAIAABMICHAAIAABCIiHAAIAABQICsAAIAABJg");
	this.shape_19.setTransform(218.4,83.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA4C3IhHifIgzBLIAABUIhUAAIAAltIBUAAIAACtIBxitIBSAAIhYCDIBuDqg");
	this.shape_20.setTransform(186.8,83.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ABCC3IiNj2IABAMIABAQIAADaIhDAAIAAltIBcAAIB7DXIgBgZIAAi+IBDAAIAAFtg");
	this.shape_21.setTransform(151.1,83.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABJC3IgXhMIh0AAIgXBMIhLAAIB1ltIBhAAIBzFtgAAfAoIglh/IgoB/IBNAAg");
	this.shape_22.setTransform(117.4,83.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AA2C3Ig2iSIg+AAIAACSIhWAAIAAltICfAAQAkAAAVAGQAWAFAQAOQASAOAKAYQAKAWAAAZQAAAUgGASQgIAUgNAOQgMAKgYAMIBEChgAg+gXIA1AAQAfAAAMgHQAKgHAGgKQAGgMAAgMQAAgLgFgJQgEgJgIgHQgIgGgJgCIghgCIgzAAg");
	this.shape_23.setTransform(84.4,83.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag5C0QgbgHgUgQQgSgOgJgPQgJgPgIgaIBPgTQAEAOAGAJQAHAKAJAGQAJAGAMADQAMADANAAQAbAAAQgKQAQgKAAgSQAAgQgOgKQgNgIgjgIQgfgGgTgHQgTgGgPgJQgWgLgLgWQgMgWAAgbQAAgZAJgWQAKgVASgRQATgQAXgIQAYgHAdAAQAdAAAYAHQAYAGATAOQAOALAJANQAJAMAJAXIhJAYQgKgZgOgJQgOgKgaAAQgWAAgNAJQgNAJAAAPQAAAQAMAIQALAJAcAGQApAIAVAHQAUAGAOAKQAXAPAMAVQAMAWAAAbQAAAOgDAOQgEAOgHANQgHANgKALQgKALgNAHQgRAMgZAGQgZAGgcAAQgfAAgagIg");
	this.shape_24.setTransform(642.5,20.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ABJC3IgXhMIh0AAIgXBMIhLAAIB1ltIBhAAIBzFtgAAfAoIglh/IgoB/IBNAAg");
	this.shape_25.setTransform(611.6,20.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AA5C3IAAiXIhxAAIAACXIhUAAIAAltIBUAAIAACPIBxAAIAAiPIBUAAIAAFtg");
	this.shape_26.setTransform(578.2,20.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AiCC3IAAltIEEAAIAABGIisAAIAABMICHAAIAABCIiHAAIAABQICsAAIAABJg");
	this.shape_27.setTransform(534,20.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AA2C3Ig2iSIg9AAIAACSIhXAAIAAltICfAAQAjAAAWAGQAVAFASAOQARAOAKAYQALAWAAAaQAAATgIASQgHAUgMAOQgMAKgYAMIBDChgAg9gXIA0AAQAgAAAMgHQAJgHAGgKQAGgMAAgMQAAgLgEgJQgFgJgIgHQgIgGgKgCIgggBIgyAAg");
	this.shape_28.setTransform(500.7,20.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgiC5QgQgEgOgGQgPgHgMgKQgMgKgKgNQgNgSgSgsQgHgXgEgyQAAgaALgwIANggIARgcQAKgNANgKQAMgKAPgHQAPgHARgDQAQgDARAAQATAAAQADQAQADAOAHQAOAGAMAKQAMAKAKAOQAYAnAHAYQALAwAAAZQgEAwgHAXQgRAtgNARQgKANgMAKQgNAJgPAHQgOAHgRAEQgRADgRAAQgSAAgQgDgAgdhuQgNAIgHAQQgIAQgEAXQgEAXAAAYQAAAdAEAWQAEAXAJAPQAIAPANAHQANAHAPAAQAQAAANgHQAMgHAIgPQAIgPAEgWQAEgWAAgeQAAgcgEgXQgEgWgIgPQgIgPgNgHQgMgIgRAAQgQAAgNAIg");
	this.shape_29.setTransform(465.4,20.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ABxC3IAAkpIhcEpIg5AAIhakpIAAEpIhIAAIAAltICFAAIBADZIBDjZICFAAIAAFtg");
	this.shape_30.setTransform(425.2,20.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_31.setTransform(394.6,20.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgqC3IAAkkIhbAAIAAhJIELAAIAABJIhbAAIAAEkg");
	this.shape_32.setTransform(374.2,20.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhzC3IAAltIBXAAIAAEkICQAAIAABJg");
	this.shape_33.setTransform(349.3,20.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("ABJC3IgXhMIh0AAIgXBMIhLAAIB1ltIBhAAIBzFtgAAfAoIglh/IgoB/IBNAAg");
	this.shape_34.setTransform(318.1,20.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AiWC3IAAltICpAAQAhAAATAFQAUAGAQANQAQANAKASQAIASAAAVQAAAQgEANQgEANgIAKQgJAKgMAIQgNAHgRAFIAcAHQAKAGAJAIQAOAMAIASQAIASAAATQAAAVgJAUQgJATgPANQgRAPgYAHQgYAGgiAAgAhBB0IBBAAQAdAAANgJQAJgFAFgLQAGgJAAgMQAAgUgPgMQgQgMgcAAIhEAAgAhBgkIBBAAQAaAAALgJQAQgLAAgWQAAgTgNgKQgGgHgJgBIgegCIg8AAg");
	this.shape_35.setTransform(285.6,20.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgoBUIAohUIgoAAIAAhTIBRAAIAABLIgzBcg");
	this.shape_36.setTransform(247.9,38.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag5C0QgbgHgUgQQgSgOgJgPQgJgPgIgaIBPgTQAEAOAGAJQAHAKAJAGQAJAGAMADQAMADANAAQAbAAAQgKQAQgKAAgSQAAgQgOgKQgNgIgjgIQgfgGgTgHQgTgGgPgJQgWgLgLgWQgMgWAAgbQAAgZAJgWQAKgVASgRQATgQAXgIQAYgHAdAAQAdAAAYAHQAYAGATAOQAOALAJANQAJAMAJAXIhJAYQgKgZgOgJQgOgKgaAAQgWAAgNAJQgNAJAAAPQAAAQAMAIQALAJAcAGQApAIAVAHQAUAGAOAKQAXAPAMAVQAMAWAAAbQAAAOgDAOQgEAOgHANQgHANgKALQgKALgNAHQgRAMgZAGQgZAGgcAAQgfAAgagIg");
	this.shape_37.setTransform(224.7,20.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AA2C3Ig2iSIg+AAIAACSIhWAAIAAltICfAAQAkAAAVAGQAWAFAQAOQASAOAKAYQAKAWAAAaQAAATgGASQgIAUgNAOQgMAKgYAMIBEChgAg+gXIA1AAQAfAAAMgHQAKgHAGgKQAGgMAAgMQAAgLgFgJQgEgJgIgHQgIgGgJgCIghgBIgzAAg");
	this.shape_38.setTransform(193.3,20.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("ABJC3IgXhMIh0AAIgXBMIhLAAIB1ltIBhAAIBzFtgAAfAoIglh/IgoB/IBNAAg");
	this.shape_39.setTransform(158.7,20.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AiBC3IAAltIEEAAIAABGIitAAIAABMICIAAIAABCIiIAAIAABQICtAAIAABJg");
	this.shape_40.setTransform(128.6,20.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgpC3IAAibIh0jSIBkAAIBECLIBGiLIBNAAIhzDSIAACbg");
	this.shape_41.setTransform(98.3,20.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AA2C3Ig2iSIg9AAIAACSIhXAAIAAltICfAAQAjAAAWAGQAVAFASAOQARAOAKAYQALAWAAAaQAAATgIASQgHAUgMAOQgMAKgYAMIBDChgAg9gXIA0AAQAgAAAMgHQAJgHAGgKQAGgMAAgMQAAgLgEgJQgFgJgIgHQgIgGgKgCIgggBIgyAAg");
	this.shape_42.setTransform(54.7,20.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgiC5QgQgEgOgGQgPgHgMgKQgMgKgKgNQgNgSgSgsQgHgXgEgyQAAgaALgwIANggIARgcQAKgNANgKQAMgKAPgHQAPgHARgDQAQgDARAAQATAAAQADQAQADAOAHQAOAGAMAKQAMAKAKAOQAYAnAHAYQALAwAAAZQgEAwgHAXQgRAtgNARQgKANgMAKQgNAJgPAHQgOAHgRAEQgRADgRAAQgSAAgQgDgAgdhuQgNAIgHAQQgIAQgEAXQgEAXAAAYQAAAdAEAWQAEAXAJAPQAIAPANAHQANAHAPAAQAQAAANgHQAMgHAIgPQAIgPAEgWQAEgWAAgeQAAgcgEgXQgEgWgIgPQgIgPgNgHQgMgIgRAAQgQAAgNAIg");
	this.shape_43.setTransform(19.5,20.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AiBC3IAAltIEDAAIAABJIiqAAIAABSICGAAIAABDIiGAAIAACPg");
	this.shape_44.setTransform(-10.9,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.7,0,690.3,185);


(lib.BALTIMOREISAMONGTEXT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiCC3IAAltIEEAAIAABGIisAAIAABMICHAAIAABCIiHAAIAABQICsAAIAABJg");
	this.shape.setTransform(556.6,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA5C3IAAiXIhxAAIAACXIhUAAIAAltIBUAAIAACPIBxAAIAAiPIBUAAIAAFtg");
	this.shape_1.setTransform(522,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqC3IAAkkIhbAAIAAhJIELAAIAABJIhbAAIAAEkg");
	this.shape_2.setTransform(490.7,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggC5QgQgDgNgHQgOgGgMgJQgNgJgKgNQgJgMgIgOIgNggQgGgWgEg2QAAgcALgyQAFgSAJgPQAHgQALgMQALgNAMgKQANgJAOgHQAQgHAQgDQARgDAQAAQAdAAAZAIQAXAIASAQQATAQAMAYQAMAXAFAeIhRALQgEgWgIgPQgHgOgOgIQgOgIgRAAQgPAAgNAIQgOAIgIAQQgKAPgEAXQgFAXAAAbQAAAcAFAWQAFAWAKAOQAJAPAOAIQAOAHAQAAQAPAAAMgFQANgGAIgLQAMgQAAgZIhGAAIAAhDICXAAIAADDIgnAAQgFgUgIgXQgeAegPAIQgMAFgOADIgcACQgQAAgQgDg");
	this.shape_3.setTransform(445.3,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABCC3IiNj2IABAMIABAQIAADaIhCAAIAAltIBbAAIB7DXIgBgZIAAi+IBCAAIAAFtg");
	this.shape_4.setTransform(410.5,20.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiC5QgQgEgOgGQgPgHgMgKQgMgKgKgNQgNgSgSgsQgHgXgEgyQAAgaALgwIANggIARgcQAKgNANgKQAMgKAPgHQAPgHARgDQAQgDARAAQATAAAQADQAQADAOAHQAOAGAMAKQAMAKAKAOQAYAnAHAYQALAwAAAZQgEAwgHAXQgRAtgNARQgKANgMAKQgNAJgPAHQgOAHgRAEQgRADgRAAQgSAAgQgDgAgdhuQgNAIgHAQQgIAQgEAXQgEAXAAAYQAAAdAEAWQAEAXAJAPQAIAPANAHQANAHAPAAQAQAAANgHQAMgHAIgPQAIgPAEgWQAEgWAAgeQAAgcgEgXQgEgWgIgPQgIgPgNgHQgMgIgRAAQgQAAgNAIg");
	this.shape_5.setTransform(375.1,20.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABxC3IAAkpIhcEpIg5AAIhakpIAAEpIhIAAIAAltICFAAIBADZIBDjZICFAAIAAFtg");
	this.shape_6.setTransform(333.9,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABJC3IgXhMIh0AAIgXBMIhLAAIB1ltIBhAAIBzFtgAAfAoIglh/IgoB/IBNAAg");
	this.shape_7.setTransform(293.4,20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag5C0QgbgHgUgQQgSgOgJgPQgJgPgIgaIBPgTQAEAOAGAJQAHAKAJAGQAJAGAMADQAMADANAAQAbAAAQgKQAQgKAAgSQAAgQgOgKQgNgIgjgIQgfgGgTgHQgTgGgPgJQgWgLgLgWQgMgWAAgbQAAgZAJgWQAKgVASgRQATgQAXgIQAYgHAdAAQAdAAAYAHQAYAGATAOQAOALAJANQAJAMAJAXIhJAYQgKgZgOgJQgOgKgaAAQgWAAgNAJQgNAJAAAPQAAAQAMAIQALAJAcAGQApAIAVAHQAUAGAOAKQAXAPAMAVQAMAWAAAbQAAAOgDAOQgEAOgHANQgHANgKALQgKALgNAHQgRAMgZAGQgZAGgcAAQgfAAgagIg");
	this.shape_8.setTransform(246.1,20.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_9.setTransform(223.3,20.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiCC3IAAltIEEAAIAABGIisAAIAABMICHAAIAABCIiHAAIAABQICsAAIAABJg");
	this.shape_10.setTransform(187,20.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA2C3Ig2iSIg+AAIAACSIhWAAIAAltICfAAQAkAAAVAGQAWAFAQAOQASAOAKAYQAKAWAAAaQAAATgGASQgIAUgNAOQgMAKgYAMIBEChgAg+gXIA1AAQAfAAAMgHQAKgHAGgKQAGgMAAgMQAAgLgFgJQgEgJgIgHQgIgGgJgCIghgBIgzAAg");
	this.shape_11.setTransform(152.8,20.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiC5QgQgEgOgGQgPgHgMgKQgMgKgKgNQgNgSgSgsQgHgXgEgyQAAgaALgwIANggIARgcQAKgNANgKQAMgKAPgHQAPgHARgDQAQgDARAAQATAAAQADQAQADAOAHQAOAGAMAKQAMAKAKAOQAYAnAHAYQALAwAAAZQgEAwgHAXQgRAtgNARQgKANgMAKQgNAJgPAHQgOAHgRAEQgRADgRAAQgSAAgQgDgAgdhuQgNAIgHAQQgIAQgEAXQgEAXAAAYQAAAdAEAWQAEAXAJAPQAIAPANAHQANAHAPAAQAQAAANgHQAMgHAIgPQAIgPAEgWQAEgWAAgeQAAgcgEgXQgEgWgIgPQgIgPgNgHQgMgIgRAAQgQAAgNAIg");
	this.shape_12.setTransform(116.6,20.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABxC3IAAkpIhcEpIg5AAIhakpIAAEpIhIAAIAAltICFAAIBADZIBDjZICFAAIAAFtg");
	this.shape_13.setTransform(75.4,20.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_14.setTransform(43.8,20.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgpC3IAAkkIhcAAIAAhJIELAAIAABJIhbAAIAAEkg");
	this.shape_15.setTransform(22.5,20.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhzC3IAAltIBXAAIAAEkICQAAIAABJg");
	this.shape_16.setTransform(-3.3,20.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABJC3IgXhMIh0AAIgXBMIhLAAIB1ltIBhAAIBzFtgAAfAoIglh/IgoB/IBNAAg");
	this.shape_17.setTransform(-35.5,20.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AiWC3IAAltICpAAQAgAAAUAFQAUAGAQANQAQANAJASQAJASAAAVQAAAQgEANQgEANgJAKQgHAKgNAIQgMAHgRAFIAbAHQAKAGAJAIQAOAMAIASQAIASAAATQAAAVgJAUQgJATgQANQgRAPgXAHQgYAGgiAAgAhBB0IBBAAQAdAAANgJQAIgFAGgLQAGgJgBgMQABgUgPgMQgQgMgbAAIhFAAgAhBgkIBBAAQAaAAALgJQAQgLAAgWQAAgTgMgKQgIgHgIgBIgegCIg8AAg");
	this.shape_18.setTransform(-69,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.9,0,663.1,59);


(lib.alloverus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0261C").s().p("AgoApIAAhRIBRAAIAABRg");
	this.shape.setTransform(577.7,82.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0261C").s().p("Ag5C0QgbgHgUgQQgSgOgJgPQgJgPgIgaIBPgTQAEAOAGAJQAHAKAJAGQAJAGAMADQAMADANAAQAbAAAQgKQAQgKAAgSQAAgQgOgKQgNgIgjgIQgfgGgTgHQgTgGgPgJQgWgLgLgWQgMgWAAgbQAAgZAJgWQAKgVASgRQATgQAXgIQAYgHAdAAQAdAAAYAHQAYAGATAOQAOALAJANQAJAMAJAXIhJAYQgKgZgOgJQgOgKgaAAQgWAAgNAJQgNAJAAAPQAAAQAMAIQALAJAcAGQApAIAVAHQAUAGAOAKQAXAPAMAVQAMAWAAAbQAAAOgDAOQgEAOgHANQgHANgKALQgKALgNAHQgRAMgZAGQgZAGgcAAQgfAAgagIg");
	this.shape_1.setTransform(553.6,68.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0261C").s().p("AgoApIAAhRIBRAAIAABRg");
	this.shape_2.setTransform(531.7,82.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0261C").s().p("AhACxQgdgJgTgTQgSgRgHgZQgIgZAAgoIAAjjIBdAAIAADjQAAAWADAMQACALAGAJQAHAJANAGQAOAFAPAAQASAAAPgGQAOgFAHgJQAGgIADgLIACgjIAAjjIBJAAIAADjQgCA0gGARQgDAMgHAKQgGAKgKAJQgUARgbAIQgbAJglAAQglAAgcgJg");
	this.shape_3.setTransform(506.8,68.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0261C").s().p("AiCC3IAAltIEEAAIAABGIisAAIAABLICHAAIAABDIiHAAIAABRICsAAIAABIg");
	this.shape_4.setTransform(460.6,68.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0261C").s().p("AA5C3IAAiXIhxAAIAACXIhUAAIAAltIBUAAIAACPIBxAAIAAiPIBUAAIAAFtg");
	this.shape_5.setTransform(426,68.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0261C").s().p("AgqC3IAAklIhbAAIAAhIIELAAIAABIIhbAAIAAElg");
	this.shape_6.setTransform(394.8,68.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0261C").s().p("AA2C3Ig2iRIg+AAIAACRIhWAAIAAltICfAAQAkAAAVAGQAWAGARANQARAOAKAYQAKAWAAAZQABAUgIATQgHASgNAOQgMALgYAMIBEChgAg+gXIA1AAQAgAAAMgHQAJgHAGgKQAGgMAAgMQAAgKgEgKQgFgKgIgGQgIgGgKgBIgggDIgzAAg");
	this.shape_7.setTransform(350.1,68.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0261C").s().p("AiBC3IAAltIEEAAIAABGIitAAIAABLICIAAIAABDIiIAAIAABRICtAAIAABIg");
	this.shape_8.setTransform(316.9,68.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0261C").s().p("AgtC3IhultIBcAAIBHEEIBMkEIBIAAIhvFtg");
	this.shape_9.setTransform(284.9,68.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E0261C").s().p("AgiC5QgQgEgOgGQgPgHgMgKQgMgKgKgNQgNgSgSgsQgHgXgEgyQAAgaALgwIANggIARgcQAKgNANgKQAMgKAPgHQAPgHARgDQAQgDARAAQATAAAQADQAQADAOAHQAOAGAMAKQAMAKAKAOQAYAnAHAYQALAwAAAZQgEAwgHAXQgRAtgNARQgKANgMAKQgNAJgPAHQgOAHgRAEQgRADgRAAQgSAAgQgDgAgdhuQgNAIgHAQQgIAQgEAXQgEAXAAAYQAAAdAEAWQAEAXAJAPQAIAPANAHQANAHAPAAQAQAAANgHQAMgHAIgPQAIgPAEgWQAEgWAAgeQAAgcgEgXQgEgWgIgPQgIgPgNgHQgMgIgRAAQgQAAgNAIg");
	this.shape_10.setTransform(252.1,68.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E0261C").s().p("AhzC3IAAltIBXAAIAAElICQAAIAABIg");
	this.shape_11.setTransform(208.4,68.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E0261C").s().p("AhzC3IAAltIBXAAIAAElICQAAIAABIg");
	this.shape_12.setTransform(180.8,68.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0261C").s().p("ABJC3IgXhMIh0AAIgXBMIhLAAIB1ltIBhAAIBzFtgAAfAoIglh/IgoB/IBNAAg");
	this.shape_13.setTransform(148.6,68.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,586.8,107);


(lib._2015shootingstext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3CxQgagIgVgRQgQgOgIgPQgJgQgHgZIBQgMQAHAZAOALQAPAMAaAAQALAAAKgEQALgEAIgIQAIgHAEgLQAFgKgBgMQABgMgFgKQgEgLgJgIQgHgIgLgEQgKgFgLAAQgQAAgOAIQgOAHgIAOIhGgMIAOjOIDlAAIgKBMIidAAIgGBRQARgRASgHQARgHAYAAQAaAAAWAJQAWAIAPAQQARAQAIATQAJAWAAAZQAAAdgKAZQgKAYgSARQgUARgaAJQgaAJghAAQgfAAgYgJg");
	this.shape.setTransform(423.8,175.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiTC5IAAhCIBvAAIAAjQQhKArgcAMIAAhMQAfgIAvgZQAQgJAMgLQALgKAIgLIA8AAIAAEvIBlAAIAABCg");
	this.shape_1.setTransform(392.8,175.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfC5QgOgDgNgHQgNgGgLgJQgLgJgJgMQgNgSgRgtQgGgYgEg0QAAgYAKgyQAGgXAWgmQAJgNALgKQALgJAOgHQANgHAPgDQAPgDAQAAQAPAAAPADQAPADANAHQANAGAMAKQALAKAJAMIARAcIAMAhQALAxAAAcQgEAzgHAXQgRAsgMASQgJAMgLAJQgMAKgNAGQgNAHgPADQgPADgPAAQgQAAgPgDgAgYh3QgLAHgGAOQgGAPgDAYQgDAXAAAiQAAAjADAYQADAYAGAPQAHAPAKAHQAKAHAOAAQAOAAAKgHQALgHAGgPQAHgOADgYQADgXAAghQAAgigDgZQgDgZgGgPQgHgPgLgHQgKgHgOAAQgOAAgKAHg");
	this.shape_2.setTransform(359.9,175.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiLC5IAAhHIAWgQIAsgfQAdgUBBg6QANgOAHgOQAHgPAAgOQAAgWgOgNQgOgPgVAAQgOABgKAFQgLADgHAJQgIAJgFANQgFAOgCARIhMgRQAHgeALgXQANgXARgPQATgPAXgHQAYgIAbABQAdgBAWAHQAWAGASAPQAVARAKAWQAMAWAAAbQAAARgFAPQgFAQgIAPQgJAMgPAPIgkAeQgZAUhCApICtAAIgGBJg");
	this.shape_3.setTransform(327.7,175.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABCC3IiNj2IABANIABAPIAADaIhDAAIAAltIBcAAIB7DWIgBgYIAAi+IBDAAIAAFtg");
	this.shape_4.setTransform(281.2,175.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_5.setTransform(255.9,175.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0261C").s().p("Ag5C0QgbgHgUgQQgSgOgJgPQgJgPgIgaIBPgTQAEAOAGAJQAHAKAJAGQAJAGAMADQAMADANAAQAbAAAQgKQAQgKAAgSQAAgQgOgKQgNgIgjgIQgfgGgTgHQgTgGgPgJQgWgLgLgWQgMgWAAgbQAAgZAJgWQAKgVASgRQATgQAXgIQAYgHAdAAQAdAAAYAHQAYAGATAOQAOALAJANQAJAMAJAXIhJAYQgKgZgOgJQgOgKgaAAQgWAAgNAJQgNAJAAAPQAAAQAMAIQALAJAcAGQApAIAVAHQAUAGAOAKQAXAPAMAVQAMAWAAAbQAAAOgDAOQgEAOgHANQgHANgKALQgKALgNAHQgRAMgZAGQgZAGgcAAQgfAAgagIg");
	this.shape_6.setTransform(218,175.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0261C").s().p("AA5C3IAAiXIhxAAIAACXIhUAAIAAltIBUAAIAACPIBxAAIAAiPIBUAAIAAFtg");
	this.shape_7.setTransform(185.6,175.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0261C").s().p("AgpC3IAAkkIhcAAIAAhJIELAAIAABJIhbAAIAAEkg");
	this.shape_8.setTransform(154.8,175.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0261C").s().p("ABJC3IgXhMIh0AAIgXBMIhLAAIB1ltIBhAAIBzFtgAAfAoIglh/IgoB/IBNAAg");
	this.shape_9.setTransform(124.9,175.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E0261C").s().p("AiBC3IAAltIEEAAIAABGIitAAIAABLICIAAIAABDIiIAAIAABRICtAAIAABIg");
	this.shape_10.setTransform(94.2,175.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E0261C").s().p("AiVC3IAAltIBwAAIAtADQAVADAQAFQARAHAOAKQAOAJANAOQAMANAIAPQAJAPAFAQIAJAjIAEAlIgEAkIgIAiIgOAgQgJAPgLANQgMANgNAKQgOAKgQAHQgQAGgTAEQgQADgVAAgAhAByIAjAAQAWAAAOgHQAQgIALgOQANgRAHgYQAHgVAAgYQAAgXgHgWQgGgWgNgQQgLgQgQgHQgOgHgWAAIgkAAg");
	this.shape_11.setTransform(60.9,175.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E0261C").s().p("AgfC5QgOgDgNgHQgNgGgLgJQgLgJgJgMQgNgSgRgtQgGgYgEg0QAAgYAKgyQAGgXAWgmQAJgNALgKQALgJAOgHQANgHAPgDQAPgDAQAAQAPAAAPADQAPADANAHQANAGAMAKQALAKAJAMIARAcIAMAhQALAxAAAcQgEAzgHAXQgRAsgMASQgJAMgLAJQgMAKgNAGQgNAHgPADQgPADgPAAQgQAAgPgDgAgYh3QgLAHgGAOQgGAPgDAYQgDAXAAAiQAAAjADAYQADAYAGAPQAHAPAKAHQAKAHAOAAQAOAAAKgHQALgHAGgPQAHgOADgYQADgXAAghQAAgigDgZQgDgZgGgPQgHgPgLgHQgKgHgOAAQgOAAgKAHg");
	this.shape_12.setTransform(13.1,175.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0261C").s().p("AgfC5QgOgDgNgHQgNgGgLgJQgLgJgJgMQgNgSgRgtQgGgYgEg0QAAgYAKgyQAGgXAWgmQAJgNALgKQALgJAOgHQANgHAPgDQAPgDAQAAQAPAAAPADQAPADANAHQANAGAMAKQALAKAJAMIARAcIAMAhQALAxAAAcQgEAzgHAXQgRAsgMASQgJAMgLAJQgMAKgNAGQgNAHgPADQgPADgPAAQgQAAgPgDgAgYh3QgLAHgGAOQgGAPgDAYQgDAXAAAiQAAAjADAYQADAYAGAPQAHAPAKAHQAKAHAOAAQAOAAAKgHQALgHAGgPQAHgOADgYQADgXAAghQAAgigDgZQgDgZgGgPQgHgPgLgHQgKgHgOAAQgOAAgKAHg");
	this.shape_13.setTransform(-18.7,175.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E0261C").s().p("Ag4C0QgagJgUgUQgSgPgIgRQgJgQgFgaIBOgLQADAOAGALQAGALAIAHQAIAHAKADQALADAMAAQAZAAAPgNQAQgOAAgWQAAgMgFgLQgFgKgJgGQgNgJgkAAIghAAIAAg+IAnAAQAOAAALgDQAKgEAIgHQALgNAAgQQAAgTgOgNQgOgMgUAAQgWAAgNALQgNALgIAYIhLgMQAGgVAHgNQAHgMANgOQAVgTAYgJQAZgJAeAAQAdAAAYAHQAYAGARAOQARANAKASQAJASAAAWQAAAPgEAMQgEANgHAKQgIALgMAHQgMAIgQAGIAcAHQAJAFAKAIQANANAHAQQAHAQAAAUQAAAZgKAUQgKAVgSAOQgTAPgaAHQgbAIggAAQggAAgZgIg");
	this.shape_14.setTransform(-51.4,175.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABDC3IiOj2IABANIABAPIAADaIhCAAIAAltIBcAAIB7DXIgCgZIAAi+IBCAAIAAFtg");
	this.shape_15.setTransform(538.2,112.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_16.setTransform(512.9,112.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggC5QgPgDgOgHQgOgGgMgJQgNgJgJgNQgKgMgIgOIgNggQgGgWgEg2QAAgcALgyQAFgSAJgPQAIgQAKgMQAKgNANgKQANgJAOgHQAQgHAQgDQAQgDARAAQAdAAAZAIQAXAIASAQQATAQAMAYQAMAXAFAeIhRALQgEgWgIgPQgHgOgOgIQgOgIgRAAQgPAAgNAIQgOAIgIAQQgKAPgEAXQgFAXAAAbQAAAcAFAWQAFAWAKAOQAJAPAOAIQAOAHAQAAQAPAAAMgFQANgGAIgLQAMgQAAgZIhGAAIAAhDICXAAIAADDIgnAAQgEgUgJgXQgeAegPAIQgMAFgOADIgcACQgQAAgQgDg");
	this.shape_17.setTransform(473.8,112.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABDC3IiNj2IAAANIABAPIAADaIhDAAIAAltIBdAAIB7DXIgCgZIAAi+IBDAAIAAFtg");
	this.shape_18.setTransform(439.3,112.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_19.setTransform(414,112.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgqC3IAAkkIhbAAIAAhJIELAAIAABJIhbAAIAAEkg");
	this.shape_20.setTransform(393.1,112.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhzC3IAAltIBXAAIAAElICQAAIAABIg");
	this.shape_21.setTransform(367.7,112.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhACxQgdgJgTgTQgSgRgHgZQgIgZAAgoIAAjjIBdAAIAADjQAAAWADAMQACALAGAJQAHAJANAGQAOAFAPAAQASAAAPgGQAOgFAHgJQAGgIADgLIACgjIAAjjIBJAAIAADjQgCA0gGARQgDAMgHAKQgGAKgKAJQgUARgbAIQgbAJglAAQglAAgcgJg");
	this.shape_22.setTransform(335,112.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag5C0QgbgHgUgQQgSgOgJgPQgJgPgIgaIBPgTQAEAOAGAJQAHAKAJAGQAJAGAMADQAMADANAAQAbAAAQgKQAQgKAAgSQAAgQgOgKQgNgIgjgIQgfgGgTgHQgTgGgPgJQgWgLgLgWQgMgWAAgbQAAgZAJgWQAKgVASgRQATgQAXgIQAYgHAdAAQAdAAAYAHQAYAGATAOQAOALAJANQAJAMAJAXIhJAYQgKgZgOgJQgOgKgaAAQgWAAgNAJQgNAJAAAPQAAAQAMAIQALAJAcAGQApAIAVAHQAUAGAOAKQAXAPAMAVQAMAWAAAbQAAAOgDAOQgEAOgHANQgHANgKALQgKALgNAHQgRAMgZAGQgZAGgcAAQgfAAgagIg");
	this.shape_23.setTransform(300.5,112.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AiCC3IAAltIEEAAIAABGIisAAIAABLICHAAIAABDIiHAAIAABRICsAAIAABIg");
	this.shape_24.setTransform(271.4,112.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA2C3Ig2iRIg+AAIAACRIhWAAIAAltICfAAQAkAAAVAGQAVAGARANQASAOAKAYQALAXAAAYQgBAUgGASQgIAUgMANQgNALgXAMIBDChgAg+gXIA1AAQAfAAAMgHQAKgHAGgKQAGgMAAgMQAAgKgFgKQgEgKgIgGQgIgGgJgCIghgCIgzAAg");
	this.shape_25.setTransform(237.6,112.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag5C0QgbgHgUgQQgSgOgJgPQgJgPgIgaIBPgTQAEAOAGAJQAHAKAJAGQAJAGAMADQAMADANAAQAbAAAQgKQAQgKAAgSQAAgQgOgKQgNgIgjgIQgfgGgTgHQgTgGgPgJQgWgLgLgWQgMgWAAgbQAAgZAJgWQAKgVASgRQATgQAXgIQAYgHAdAAQAdAAAYAHQAYAGATAOQAOALAJANQAJAMAJAXIhJAYQgKgZgOgJQgOgKgaAAQgWAAgNAJQgNAJAAAPQAAAQAMAIQALAJAcAGQApAIAVAHQAUAGAOAKQAXAPAMAVQAMAWAAAbQAAAOgDAOQgEAOgHANQgHANgKALQgKALgNAHQgRAMgZAGQgZAGgcAAQgfAAgagIg");
	this.shape_26.setTransform(189,112.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AggC5QgPgDgOgHQgOgGgMgJQgMgJgLgNQgKgMgHgOIgMggQgIgWgDg2QAAgcALgyQAGgSAHgPQAIgQALgMQALgNAMgKQANgJAOgHQAPgHARgDQARgDAQAAQAdAAAYAIQAYAIASAQQATAQAMAYQAMAXAFAeIhSALQgDgWgIgPQgHgOgOgIQgOgIgRAAQgPAAgNAIQgOAIgJAQQgIAPgFAXQgFAXAAAbQAAAcAFAWQAFAWAKAOQAJAPAOAIQAOAHAQAAQAPAAAMgFQANgGAIgLQALgQAAgZIhFAAIAAhDICXAAIAADDIgnAAQgFgUgIgXQgdAegQAIQgMAFgNADIgdACQgQAAgQgDg");
	this.shape_27.setTransform(156.2,112.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ABCC3IiNj2IABANIABAPIAADaIhDAAIAAltIBcAAIB7DXIgBgZIAAi+IBCAAIAAFtg");
	this.shape_28.setTransform(121.8,112.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_29.setTransform(96.5,112.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgqC3IAAkkIhbAAIAAhJIELAAIAABJIhaAAIAAEkg");
	this.shape_30.setTransform(75.5,112.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgiC5QgQgEgOgGQgPgHgMgKQgMgKgKgNQgNgSgSgsQgHgXgEgyQAAgaALgwIANggIARgcQAKgNANgKQAMgKAPgHQAPgHARgDQAQgDARAAQATAAAQADQAQADAOAHQAOAGAMAKQAMAKAKAOQAYAnAHAYQALAwAAAZQgEAwgHAXQgRAtgNARQgKANgMAKQgNAJgPAHQgOAHgRAEQgRADgRAAQgSAAgQgDgAgdhuQgNAIgHAQQgIAQgEAXQgEAXAAAYQAAAdAEAWQAEAXAJAPQAIAPANAHQANAHAPAAQAQAAANgHQAMgHAIgPQAIgPAEgWQAEgWAAgeQAAgcgEgXQgEgWgIgPQgIgPgNgHQgMgIgRAAQgQAAgNAIg");
	this.shape_31.setTransform(44.9,112.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgiC5QgQgEgOgGQgPgHgMgKQgMgKgKgNQgNgSgSgsQgHgXgEgyQAAgaALgwIANggIARgcQAKgNANgKQAMgKAPgHQAPgHARgDQAQgDARAAQATAAAQADQAQADAOAHQAOAGAMAKQAMAKAKAOQAYAnAHAYQALAwAAAZQgEAwgHAXQgRAtgNARQgKANgMAKQgNAJgPAHQgOAHgRAEQgRADgRAAQgSAAgQgDgAgdhuQgNAIgHAQQgIAQgEAXQgEAXAAAYQAAAdAEAWQAEAXAJAPQAIAPANAHQANAHAPAAQAQAAANgHQAMgHAIgPQAIgPAEgWQAEgWAAgeQAAgcgEgXQgEgWgIgPQgIgPgNgHQgMgIgRAAQgQAAgNAIg");
	this.shape_32.setTransform(10.2,112.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AA5C3IAAiXIhxAAIAACXIhUAAIAAltIBUAAIAACPIBxAAIAAiPIBUAAIAAFtg");
	this.shape_33.setTransform(-24.7,112.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag5C0QgbgHgUgQQgSgOgJgPQgJgPgIgaIBPgTQAEAOAGAJQAHAKAJAGQAJAGAMADQAMADANAAQAbAAAQgKQAQgKAAgSQAAgQgOgKQgNgIgjgIQgfgGgTgHQgTgGgPgJQgWgLgLgWQgMgWAAgbQAAgZAJgWQAKgVASgRQATgQAXgIQAYgHAdAAQAdAAAYAHQAYAGATAOQAOALAJANQAJAMAJAXIhJAYQgKgZgOgJQgOgKgaAAQgWAAgNAJQgNAJAAAPQAAAQAMAIQALAJAcAGQApAIAVAHQAUAGAOAKQAXAPAMAVQAMAWAAAbQAAAOgDAOQgEAOgHANQgHANgKALQgKALgNAHQgRAMgZAGQgZAGgcAAQgfAAgagIg");
	this.shape_34.setTransform(-59.2,112.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhFC3QgBgYAJgzQAJgnARgoQARgmAVgkQAPgWAkgnIi4AAIAGhMID/AAIAABBQgUAYgQAaQgRAagRAnQgTAugGAcQgJA7AAAZIABAbg");
	this.shape_35.setTransform(-103,112.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag4C0QgagJgUgUQgSgPgIgRQgJgQgFgaIBOgLQADAOAGALQAGALAIAHQAIAHAKADQALADAMAAQAZAAAPgNQAQgOAAgWQAAgMgFgLQgFgKgJgGQgNgJgkAAIghAAIAAg+IAnAAQAOAAALgDQAKgEAIgHQALgNAAgQQAAgTgOgNQgOgMgUAAQgWAAgNALQgNALgIAYIhLgMQAGgVAHgNQAHgMANgOQAVgTAYgJQAZgJAeAAQAdAAAYAHQAYAGARAOQARANAKASQAJASAAAWQAAAPgEAMQgEANgHAKQgIALgMAHQgMAIgQAGIAcAHQAJAFAKAIQANANAHAQQAHAQAAAUQAAAZgKAUQgKAVgSAOQgTAPgaAHQgbAIggAAQggAAgZgIg");
	this.shape_36.setTransform(-135.9,112.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag+C0QgXgJgRgSQgKgLgGgLQgGgMgGgUIBLgNQAHATAMAKQALAJATAAQASAAAOgMQAOgMAHgWQAFgOADg5QgTAVgSAIQgSAJgZAAQgZAAgVgJQgVgIgPgPQgPgNgIgUQgIgVAAgZQAAgbAJgXQAKgWARgQQASgQAZgJQAZgIAeAAQAUAAAmALQAOAFALAJQALAIAIAKQAKANAIAPIANAhQAKAyAAAdQgDA0gHAYIgMAiQgIAQgKAOQgJANgMAKQgMAKgOAGQgOAHgQADQgQADgQAAQgdAAgXgIgAgXh6QgKAEgIAIQgHAHgFAKQgEALAAALQAAAMAEAKQAEAKAHAIQAIAHAJAEQAKAFALAAQAKAAAKgFQAKgEAIgIQAIgHAEgKQAEgLAAgLQAAgLgEgLQgEgKgIgHQgHgIgKgEQgKgFgJAAQgLAAgKAFg");
	this.shape_37.setTransform(-167.1,112.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.1,92,742.7,170);


(lib._2014shootingstext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALC5IAAhUIieAAIAAhBICTjcIBhAAIAADcIAzAAIAABBIgzAAIAABUgAhTAkIBiAAIAAh5IAAgSIABgQg");
	this.shape.setTransform(506.5,83.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiTC5IAAhCIBwAAIAAjQQhMAsgbAKIAAhLQAegIAwgZQARgKALgKQALgLAHgKIA9AAIAAEvIBlAAIAABCg");
	this.shape_1.setTransform(475.8,83.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfC5QgOgDgNgHQgNgGgLgJQgLgJgJgMQgNgSgRgtQgGgYgEg0QAAgYAKgyQAGgXAWgmQAJgNALgKQALgJAOgHQANgHAPgDQAPgDAQAAQAPAAAPADQAPADANAHQANAGAMAKQALAKAJAMIARAcIAMAhQALAxAAAcQgEAzgHAXQgRAsgMASQgJAMgLAJQgMAKgNAGQgNAHgPADQgPADgPAAQgQAAgPgDgAgYh3QgLAHgGAOQgGAPgDAYQgDAXAAAiQAAAjADAYQADAYAGAPQAHAPAKAHQAKAHAOAAQAOAAAKgHQALgHAGgPQAHgOADgYQADgXAAghQAAgigDgZQgDgZgGgPQgHgPgLgHQgKgHgOAAQgOAAgKAHg");
	this.shape_2.setTransform(442.9,83.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiLC5IAAhHIAWgQIAtgfQAcgVBAg5QAOgOAHgOQAHgPAAgOQAAgWgOgNQgOgOgUgBQgOAAgLAGQgKADgIAJQgIAJgFANQgFAOgCARIhMgRQAGgfAMgWQAMgXATgPQARgPAXgIQAZgGAbAAQAeAAAVAFQAVAIATAOQAVAQALAXQAKAWABAbQgBARgEAPQgEAQgJAOQgJAMgPAQIgkAeQgaAUhBAqICtAAIgGBIg");
	this.shape_3.setTransform(410.7,83.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABDC3IiNj2IAAAMIABAQIAADaIhDAAIAAltIBdAAIB7DXIgCgZIAAi+IBDAAIAAFtg");
	this.shape_4.setTransform(364.2,83.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_5.setTransform(338.9,83.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0261C").s().p("Ag5C0QgbgHgUgQQgSgOgJgPQgJgPgIgaIBPgTQAEAOAGAJQAHAKAJAGQAJAGAMADQAMADANAAQAbAAAQgKQAQgKAAgSQAAgQgOgKQgNgIgjgIQgfgGgTgHQgTgGgPgJQgWgLgLgWQgMgWAAgbQAAgZAJgWQAKgVASgRQATgQAXgIQAYgHAdAAQAdAAAYAHQAYAGATAOQAOALAJANQAJAMAJAXIhJAYQgKgZgOgJQgOgKgaAAQgWAAgNAJQgNAJAAAPQAAAQAMAIQALAJAcAGQApAIAVAHQAUAGAOAKQAXAPAMAVQAMAWAAAbQAAAOgDAOQgEAOgHANQgHANgKALQgKALgNAHQgRAMgZAGQgZAGgcAAQgfAAgagIg");
	this.shape_6.setTransform(301,83.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0261C").s().p("AA5C3IAAiXIhxAAIAACXIhUAAIAAltIBUAAIAACPIBxAAIAAiPIBUAAIAAFtg");
	this.shape_7.setTransform(268.6,83.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0261C").s().p("AgpC3IAAkkIhcAAIAAhJIELAAIAABJIhaAAIAAEkg");
	this.shape_8.setTransform(237.8,83.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0261C").s().p("ABJC3IgXhMIh0AAIgXBMIhLAAIB1ltIBhAAIBzFtgAAfAoIglh/IgoB/IBNAAg");
	this.shape_9.setTransform(207.9,83.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E0261C").s().p("AiBC3IAAltIEEAAIAABGIitAAIAABMICIAAIAABCIiIAAIAABQICtAAIAABJg");
	this.shape_10.setTransform(177.2,83.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E0261C").s().p("AiUC3IAAltIBvAAIAtADQAVADAQAGQARAFAOALQAOAJANAOQALANAJAPQAJAPAGAQIAJAjIACAlIgCAkIgJAiIgOAgQgJAPgLANQgLANgPAKQgNAKgQAHQgQAGgTAEQgQADgVAAgAhABzIAjAAQAWgBAOgHQAQgHALgPQANgSAHgXQAHgWAAgWQAAgZgHgVQgGgWgNgQQgMgQgPgHQgOgHgWAAIgkAAg");
	this.shape_11.setTransform(143.9,83.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E0261C").s().p("AiTC5IAAhCIBwAAIAAjQQhMAsgaAKIAAhLQAdgIAwgZQAQgKAMgKQAMgLAGgKIA8AAIAAEvIBmAAIAABCg");
	this.shape_12.setTransform(97.2,83.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0261C").s().p("AgYC5QgQgDgOgHQgNgGgMgJQgMgJgKgNQgJgMgIgOIgMggQgHgXgDg3QAAgZAKgyIAMggQAHgQAJgMQAKgOAMgKQAMgLAOgHQANgGAQgEQARgCAQAAQAfAAAXAIQAXAJATATQANAOAHANQAHANAFAVIhKAUQgGgdgNgOQgNgNgXAAQgNAAgMAHQgMAIgIAOQgJAOgEAVQgEAVAAAcIAAAJQANgVAUgKQAUgLAbAAQAYAAAWAJQAVAIAQAQQAQANAIAVQAJAUAAAYQAAAYgKAXQgKAYgRAQQgTATgYAJQgYAIgeAAQgQAAgPgDgAgRAQQgKAEgIAIQgHAIgEAKQgFALAAAMQAAANAEALQAEAKAIAIQAHAIAKAEQALAEAJAAQAMAAAKgEQAKgEAHgIQAIgIAEgKQAEgLAAgNQAAgMgEgLQgEgLgHgHQgIgIgJgFQgKgEgMAAQgKAAgKAFg");
	this.shape_13.setTransform(64.4,83.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E0261C").s().p("AiTC5IAAhCIBvAAIAAjQQhKAsgbAKIAAhLQAdgIAwgZQAQgKAMgKQALgLAIgKIA7AAIAAEvIBmAAIAABCg");
	this.shape_14.setTransform(33.5,83.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABCC3IiNj2IABAMIABAQIAADaIhDAAIAAltIBcAAIB7DXIgBgZIAAi+IBCAAIAAFtg");
	this.shape_15.setTransform(621.2,20.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_16.setTransform(595.9,20.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggC5QgPgDgPgHQgOgGgMgJQgMgJgJgNQgKgMgIgOIgNggQgGgWgEg2QAAgcALgyQAFgSAIgPQAJgQAKgMQAKgNANgKQANgJAPgHQAPgHAPgDQARgDARAAQAdAAAZAIQAXAIATAQQASAQAMAYQAMAXAFAeIhRALQgEgWgHgPQgJgOgNgIQgOgIgRAAQgPAAgNAIQgNAIgKAQQgJAPgEAXQgFAXAAAbQAAAcAFAWQAFAWAJAOQAKAPAOAIQAOAHAQAAQAPAAAMgFQANgGAIgLQAMgQAAgZIhGAAIAAhDICXAAIAADDIgnAAQgFgUgIgXQgeAegQAIQgLAFgOADIgcACQgQAAgQgDg");
	this.shape_17.setTransform(556.8,20.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABDC3IiNj2IAAAMIABAQIAADaIhCAAIAAltIBcAAIB7DXIgCgZIAAi+IBCAAIAAFtg");
	this.shape_18.setTransform(522.3,20.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_19.setTransform(497,20.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgpC3IAAkkIhcAAIAAhJIELAAIAABJIhbAAIAAEkg");
	this.shape_20.setTransform(476.1,20.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhzC3IAAltIBXAAIAAEkICQAAIAABJg");
	this.shape_21.setTransform(450.7,20.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhACxQgdgJgTgTQgSgRgHgZQgIgZAAgoIAAjjIBdAAIAADjQAAAWADAMQACALAGAJQAHAJANAGQAOAFAPAAQASAAAPgGQAOgFAHgJQAGgIADgLIACgjIAAjjIBJAAIAADjQgCA0gGARQgDAMgHAKQgGAKgKAJQgUARgbAIQgbAJglAAQglAAgcgJg");
	this.shape_22.setTransform(418,20.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag5C0QgbgHgUgQQgSgOgJgPQgJgPgIgaIBPgTQAEAOAGAJQAHAKAJAGQAJAGAMADQAMADANAAQAbAAAQgKQAQgKAAgSQAAgQgOgKQgNgIgjgIQgfgGgTgHQgTgGgPgJQgWgLgLgWQgMgWAAgbQAAgZAJgWQAKgVASgRQATgQAXgIQAYgHAdAAQAdAAAYAHQAYAGATAOQAOALAJANQAJAMAJAXIhJAYQgKgZgOgJQgOgKgaAAQgWAAgNAJQgNAJAAAPQAAAQAMAIQALAJAcAGQApAIAVAHQAUAGAOAKQAXAPAMAVQAMAWAAAbQAAAOgDAOQgEAOgHANQgHANgKALQgKALgNAHQgRAMgZAGQgZAGgcAAQgfAAgagIg");
	this.shape_23.setTransform(383.5,20.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AiCC3IAAltIEEAAIAABGIisAAIAABMICHAAIAABCIiHAAIAABQICsAAIAABJg");
	this.shape_24.setTransform(354.4,20.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA2C3Ig2iSIg9AAIAACSIhXAAIAAltICfAAQAjAAAWAGQAVAFASAOQARAOAKAYQALAWAAAaQAAATgHASQgIAUgMAOQgMAKgYAMIBDChgAg9gXIA0AAQAfAAANgHQAJgHAGgKQAGgMAAgMQAAgLgFgJQgEgJgIgHQgIgGgKgCIgggBIgyAAg");
	this.shape_25.setTransform(320.6,20.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag5C0QgbgHgUgQQgSgOgJgPQgJgPgIgaIBPgTQAEAOAGAJQAHAKAJAGQAJAGAMADQAMADANAAQAbAAAQgKQAQgKAAgSQAAgQgOgKQgNgIgjgIQgfgGgTgHQgTgGgPgJQgWgLgLgWQgMgWAAgbQAAgZAJgWQAKgVASgRQATgQAXgIQAYgHAdAAQAdAAAYAHQAYAGATAOQAOALAJANQAJAMAJAXIhJAYQgKgZgOgJQgOgKgaAAQgWAAgNAJQgNAJAAAPQAAAQAMAIQALAJAcAGQApAIAVAHQAUAGAOAKQAXAPAMAVQAMAWAAAbQAAAOgDAOQgEAOgHANQgHANgKALQgKALgNAHQgRAMgZAGQgZAGgcAAQgfAAgagIg");
	this.shape_26.setTransform(272,20.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AggC5QgQgDgNgHQgOgGgMgJQgNgJgKgNQgJgMgIgOIgNggQgGgWgEg2QAAgcALgyQAFgSAJgPQAHgQALgMQALgNAMgKQANgJAOgHQAPgHARgDQARgDAQAAQAdAAAZAIQAXAIASAQQATAQAMAYQAMAXAFAeIhRALQgEgWgIgPQgHgOgOgIQgOgIgRAAQgPAAgNAIQgOAIgIAQQgKAPgEAXQgFAXAAAbQAAAcAFAWQAFAWAKAOQAJAPAOAIQAOAHAQAAQAPAAAMgFQANgGAIgLQAMgQAAgZIhGAAIAAhDICXAAIAADDIgnAAQgFgUgIgXQgeAegPAIQgMAFgOADIgcACQgQAAgQgDg");
	this.shape_27.setTransform(239.2,20.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ABCC3IiMj2IAAAMIABAQIAADaIhDAAIAAltIBdAAIB6DXIgBgZIAAi+IBDAAIAAFtg");
	this.shape_28.setTransform(204.8,20.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_29.setTransform(179.5,20.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgqC3IAAkkIhbAAIAAhJIELAAIAABJIhbAAIAAEkg");
	this.shape_30.setTransform(158.5,20.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgiC5QgQgEgOgGQgPgHgMgKQgMgKgKgNQgNgSgSgsQgHgXgEgyQAAgaALgwIANggIARgcQAKgNANgKQAMgKAPgHQAPgHARgDQAQgDARAAQATAAAQADQAQADAOAHQAOAGAMAKQAMAKAKAOQAYAnAHAYQALAwAAAZQgEAwgHAXQgRAtgNARQgKANgMAKQgNAJgPAHQgOAHgRAEQgRADgRAAQgSAAgQgDgAgdhuQgNAIgHAQQgIAQgEAXQgEAXAAAYQAAAdAEAWQAEAXAJAPQAIAPANAHQANAHAPAAQAQAAANgHQAMgHAIgPQAIgPAEgWQAEgWAAgeQAAgcgEgXQgEgWgIgPQgIgPgNgHQgMgIgRAAQgQAAgNAIg");
	this.shape_31.setTransform(127.9,20.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgiC5QgQgEgOgGQgPgHgMgKQgMgKgKgNQgNgSgSgsQgHgXgEgyQAAgaALgwIANggIARgcQAKgNANgKQAMgKAPgHQAPgHARgDQAQgDARAAQATAAAQADQAQADAOAHQAOAGAMAKQAMAKAKAOQAYAnAHAYQALAwAAAZQgEAwgHAXQgRAtgNARQgKANgMAKQgNAJgPAHQgOAHgRAEQgRADgRAAQgSAAgQgDgAgdhuQgNAIgHAQQgIAQgEAXQgEAXAAAYQAAAdAEAWQAEAXAJAPQAIAPANAHQANAHAPAAQAQAAANgHQAMgHAIgPQAIgPAEgWQAEgWAAgeQAAgcgEgXQgEgWgIgPQgIgPgNgHQgMgIgRAAQgQAAgNAIg");
	this.shape_32.setTransform(93.2,20.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AA5C3IAAiXIhxAAIAACXIhUAAIAAltIBUAAIAACPIBxAAIAAiPIBUAAIAAFtg");
	this.shape_33.setTransform(58.3,20.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag5C0QgbgHgUgQQgSgOgJgPQgJgPgIgaIBPgTQAEAOAGAJQAHAKAJAGQAJAGAMADQAMADANAAQAbAAAQgKQAQgKAAgSQAAgQgOgKQgNgIgjgIQgfgGgTgHQgTgGgPgJQgWgLgLgWQgMgWAAgbQAAgZAJgWQAKgVASgRQATgQAXgIQAYgHAdAAQAdAAAYAHQAYAGATAOQAOALAJANQAJAMAJAXIhJAYQgKgZgOgJQgOgKgaAAQgWAAgNAJQgNAJAAAPQAAAQAMAIQALAJAcAGQApAIAVAHQAUAGAOAKQAXAPAMAVQAMAWAAAbQAAAOgDAOQgEAOgHANQgHANgKALQgKALgNAHQgRAMgZAGQgZAGgcAAQgfAAgagIg");
	this.shape_34.setTransform(23.8,20.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgfC5QgOgDgNgHQgNgGgLgJQgLgJgJgMQgNgSgRgtQgGgYgEg0QAAgYAKgyQAGgXAWgmQAJgNALgKQALgJAOgHQANgHAPgDQAPgDAQAAQAPAAAPADQAPADANAHQANAGAMAKQALAKAJAMIARAcIAMAhQALAxAAAcQgEAzgHAXQgRAsgMASQgJAMgLAJQgMAKgNAGQgNAHgPADQgPADgPAAQgQAAgPgDgAgYh3QgLAHgGAOQgGAPgDAYQgDAXAAAiQAAAjADAYQADAYAGAPQAHAPAKAHQAKAHAOAAQAOAAAKgHQALgHAGgPQAHgOADgYQADgXAAghQAAgigDgZQgDgZgGgPQgHgPgLgHQgKgHgOAAQgOAAgKAHg");
	this.shape_35.setTransform(-20.2,20.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag4C0QgagJgUgUQgSgPgIgRQgJgQgFgaIBOgLQADAOAGALQAGALAIAHQAIAHAKADQALADAMAAQAZAAAPgNQAQgOAAgWQAAgMgFgLQgFgKgJgGQgNgJgkAAIghAAIAAg+IAnAAQAOAAALgDQAKgEAIgHQALgNAAgQQAAgTgOgNQgOgMgUAAQgWAAgNALQgNALgIAYIhLgMQAGgVAHgNQAHgMANgOQAVgTAYgJQAZgJAeAAQAdAAAYAHQAYAGARAOQARANAKASQAJASAAAWQAAAPgEAMQgEANgHAKQgIALgMAHQgMAIgQAGIAcAHQAJAFAKAIQANANAHAQQAHAQAAAUQAAAZgKAUQgKAVgSAOQgTAPgaAHQgbAIggAAQggAAgZgIg");
	this.shape_36.setTransform(-52.9,20.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag4CxQgZgIgVgRQgPgOgKgPQgIgQgHgZIBQgMQAGAZAQALQAOAMAZAAQALAAALgEQALgEAIgIQAIgHAEgLQAEgKABgMQgBgMgEgKQgEgLgJgIQgHgIgLgEQgLgFgKAAQgQAAgOAIQgNAHgJAOIhGgMIAOjOIDlAAIgKBMIieAAIgFBRQARgRASgHQARgHAYAAQAZAAAXAJQAWAIAQAQQAPAQAJATQAJAWAAAZQAAAdgKAZQgKAYgTARQgSARgbAJQgaAJghAAQgeAAgagJg");
	this.shape_37.setTransform(-83.6,20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.1,0,742.7,170);


(lib._2013shootingstext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4C0QgagJgUgUQgSgPgIgRQgJgQgFgaIBOgLQADAOAGALQAGALAIAHQAIAHAKADQALADAMAAQAZAAAPgNQAQgOAAgWQAAgMgFgLQgFgKgJgGQgNgJgkAAIghAAIAAg+IAnAAQAOAAALgDQAKgEAIgHQALgNAAgQQAAgTgOgNQgOgMgUAAQgWAAgNALQgNALgIAYIhLgMQAGgVAHgNQAHgMANgOQAVgTAYgJQAZgJAeAAQAdAAAYAHQAYAGARAOQARANAKASQAJASAAAWQAAAPgEAMQgEANgHAKQgIALgMAHQgMAIgQAGIAcAHQAJAFAKAIQANANAHAQQAHAQAAAUQAAAZgKAUQgKAVgSAOQgTAPgaAHQgbAIggAAQggAAgZgIg");
	this.shape.setTransform(505.7,83.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiTC5IAAhCIBwAAIAAjQQhMAsgbAKIAAhLQAegIAwgZQARgKALgKQALgLAHgKIA9AAIAAEvIBlAAIAABCg");
	this.shape_1.setTransform(475.8,83.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfC5QgOgDgNgHQgNgGgLgJQgLgJgJgMQgNgSgRgtQgGgYgEg0QAAgYAKgyQAGgXAWgmQAJgNALgKQALgJAOgHQANgHAPgDQAPgDAQAAQAPAAAPADQAPADANAHQANAGAMAKQALAKAJAMIARAcIAMAhQALAxAAAcQgEAzgHAXQgRAsgMASQgJAMgLAJQgMAKgNAGQgNAHgPADQgPADgPAAQgQAAgPgDgAgYh3QgLAHgGAOQgGAPgDAYQgDAXAAAiQAAAjADAYQADAYAGAPQAHAPAKAHQAKAHAOAAQAOAAAKgHQALgHAGgPQAHgOADgYQADgXAAghQAAgigDgZQgDgZgGgPQgHgPgLgHQgKgHgOAAQgOAAgKAHg");
	this.shape_2.setTransform(442.9,83.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiLC5IAAhHIAWgQIAtgfQAcgVBAg5QAOgOAHgOQAHgPAAgOQAAgWgOgNQgOgOgUgBQgOAAgLAGQgKADgIAJQgIAJgFANQgFAOgCARIhMgRQAGgfAMgWQAMgXATgPQARgPAXgIQAZgGAbAAQAeAAAVAFQAVAIATAOQAVAQALAXQAKAWABAbQgBARgEAPQgEAQgJAOQgJAMgPAQIgkAeQgaAUhBAqICtAAIgGBIg");
	this.shape_3.setTransform(410.7,83.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABDC3IiNj2IAAAMIABAQIAADaIhDAAIAAltIBdAAIB7DXIgCgZIAAi+IBDAAIAAFtg");
	this.shape_4.setTransform(364.2,83.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_5.setTransform(338.9,83.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0261C").s().p("Ag5C0QgbgHgUgQQgSgOgJgPQgJgPgIgaIBPgTQAEAOAGAJQAHAKAJAGQAJAGAMADQAMADANAAQAbAAAQgKQAQgKAAgSQAAgQgOgKQgNgIgjgIQgfgGgTgHQgTgGgPgJQgWgLgLgWQgMgWAAgbQAAgZAJgWQAKgVASgRQATgQAXgIQAYgHAdAAQAdAAAYAHQAYAGATAOQAOALAJANQAJAMAJAXIhJAYQgKgZgOgJQgOgKgaAAQgWAAgNAJQgNAJAAAPQAAAQAMAIQALAJAcAGQApAIAVAHQAUAGAOAKQAXAPAMAVQAMAWAAAbQAAAOgDAOQgEAOgHANQgHANgKALQgKALgNAHQgRAMgZAGQgZAGgcAAQgfAAgagIg");
	this.shape_6.setTransform(301,83.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0261C").s().p("AA5C3IAAiXIhxAAIAACXIhUAAIAAltIBUAAIAACPIBxAAIAAiPIBUAAIAAFtg");
	this.shape_7.setTransform(268.6,83.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0261C").s().p("AgpC3IAAkkIhcAAIAAhJIELAAIAABJIhaAAIAAEkg");
	this.shape_8.setTransform(237.8,83.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0261C").s().p("ABJC3IgXhMIh0AAIgXBMIhLAAIB1ltIBhAAIBzFtgAAfAoIglh/IgoB/IBNAAg");
	this.shape_9.setTransform(207.9,83.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E0261C").s().p("AiBC3IAAltIEEAAIAABGIitAAIAABMICIAAIAABCIiIAAIAABQICtAAIAABJg");
	this.shape_10.setTransform(177.2,83.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E0261C").s().p("AiUC3IAAltIBvAAIAtADQAVADAQAGQARAFAOALQAOAJANAOQALANAJAPQAJAPAGAQIAJAjIACAlIgCAkIgJAiIgOAgQgJAPgLANQgLANgPAKQgNAKgQAHQgQAGgTAEQgQADgVAAgAhABzIAjAAQAWgBAOgHQAQgHALgPQANgSAHgXQAHgWAAgWQAAgZgHgVQgGgWgNgQQgMgQgPgHQgOgHgWAAIgkAAg");
	this.shape_11.setTransform(143.9,83.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E0261C").s().p("Ag/C1QgagHgRgOQgTgOgJgTQgKgTAAgYQAAgPAEgMQADgMAIgKQAIgKANgIQALgIATgHQgcgPgNgTQgNgUAAgbQAAgXAKgUQAKgVASgPQARgPAagHQAYgHAdAAQAdAAAYAHQAYAGARANQASANAIASQALASAAAVQAAAOgEALQgDALgHAJQgHAKgLAIIgZAPQAUAIAMAHQANAJAIALQAIALAEANQAEANAAAQQAAAagLAVQgKAVgUAPQgUAPgcAHQgcAIghAAQggAAgagHgAg4AyQgLALAAATQABAMAEAJQAFAJAIAGQAJAHANADQANADAOAAQAcAAARgKQARgLAAgSQAAgNgIgLQgJgLgQgHIgygSQgYAIgLAMgAgjh5QgOAKgBASQABATAOALQAOAKApAQQAUgHAJgLQAIgLAAgSQABgWgRgNQgHgGgLgEQgLgDgMAAQgWAAgNALg");
	this.shape_12.setTransform(96.1,83.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0261C").s().p("Ag/C1QgagHgRgOQgTgOgJgTQgKgTAAgYQAAgPADgMQAEgMAIgKQAIgKANgIQAMgIARgHQgbgPgNgTQgNgUAAgbQAAgXAKgUQAKgVASgPQARgPAagHQAYgHAdAAQAdAAAYAHQAYAGARANQARANAKASQAJASABAVQAAAOgEALQgDALgHAJQgHAKgLAIIgZAPQAUAIAMAHQANAJAIALQAIALAEANQAEANAAAQQAAAagLAVQgKAVgUAPQgTAPgdAHQgcAIghAAQggAAgagHgAg4AyQgLALAAATQAAAMAFAJQAFAJAIAGQAJAHANADQANADAOAAQAcAAARgKQARgLAAgSQAAgNgIgLQgJgLgQgHIgygSQgYAIgLAMgAgjh5QgOAKgBASQABATAOALQAOAKApAQQAUgHAJgLQAJgLgBgSQAAgWgPgNQgIgGgLgEQgLgDgMAAQgWAAgNALg");
	this.shape_13.setTransform(64.3,83.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E0261C").s().p("AiTC5IAAhCIBvAAIAAjQQhKAsgbAKIAAhLQAdgIAwgZQAQgKAMgKQALgLAIgKIA7AAIAAEvIBmAAIAABCg");
	this.shape_14.setTransform(33.5,83.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABCC3IiNj2IABAMIABAQIAADaIhDAAIAAltIBcAAIB7DXIgBgZIAAi+IBCAAIAAFtg");
	this.shape_15.setTransform(621.2,20.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_16.setTransform(595.9,20.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggC5QgPgDgPgHQgOgGgMgJQgMgJgJgNQgKgMgIgOIgNggQgGgWgEg2QAAgcALgyQAFgSAIgPQAJgQAKgMQAKgNANgKQANgJAPgHQAPgHAPgDQARgDARAAQAdAAAZAIQAXAIATAQQASAQAMAYQAMAXAFAeIhRALQgEgWgHgPQgJgOgNgIQgOgIgRAAQgPAAgNAIQgNAIgKAQQgJAPgEAXQgFAXAAAbQAAAcAFAWQAFAWAJAOQAKAPAOAIQAOAHAQAAQAPAAAMgFQANgGAIgLQAMgQAAgZIhGAAIAAhDICXAAIAADDIgnAAQgFgUgIgXQgeAegQAIQgLAFgOADIgcACQgQAAgQgDg");
	this.shape_17.setTransform(556.8,20.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABDC3IiNj2IAAAMIABAQIAADaIhCAAIAAltIBcAAIB7DXIgCgZIAAi+IBCAAIAAFtg");
	this.shape_18.setTransform(522.3,20.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_19.setTransform(497,20.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgpC3IAAkkIhcAAIAAhJIELAAIAABJIhbAAIAAEkg");
	this.shape_20.setTransform(476.1,20.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhzC3IAAltIBXAAIAAEkICQAAIAABJg");
	this.shape_21.setTransform(450.7,20.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhACxQgdgJgTgTQgSgRgHgZQgIgZAAgoIAAjjIBdAAIAADjQAAAWADAMQACALAGAJQAHAJANAGQAOAFAPAAQASAAAPgGQAOgFAHgJQAGgIADgLIACgjIAAjjIBJAAIAADjQgCA0gGARQgDAMgHAKQgGAKgKAJQgUARgbAIQgbAJglAAQglAAgcgJg");
	this.shape_22.setTransform(418,20.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag5C0QgbgHgUgQQgSgOgJgPQgJgPgIgaIBPgTQAEAOAGAJQAHAKAJAGQAJAGAMADQAMADANAAQAbAAAQgKQAQgKAAgSQAAgQgOgKQgNgIgjgIQgfgGgTgHQgTgGgPgJQgWgLgLgWQgMgWAAgbQAAgZAJgWQAKgVASgRQATgQAXgIQAYgHAdAAQAdAAAYAHQAYAGATAOQAOALAJANQAJAMAJAXIhJAYQgKgZgOgJQgOgKgaAAQgWAAgNAJQgNAJAAAPQAAAQAMAIQALAJAcAGQApAIAVAHQAUAGAOAKQAXAPAMAVQAMAWAAAbQAAAOgDAOQgEAOgHANQgHANgKALQgKALgNAHQgRAMgZAGQgZAGgcAAQgfAAgagIg");
	this.shape_23.setTransform(383.5,20.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AiCC3IAAltIEEAAIAABGIisAAIAABMICHAAIAABCIiHAAIAABQICsAAIAABJg");
	this.shape_24.setTransform(354.4,20.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA2C3Ig2iSIg9AAIAACSIhXAAIAAltICfAAQAjAAAWAGQAVAFASAOQARAOAKAYQALAWAAAaQAAATgHASQgIAUgMAOQgMAKgYAMIBDChgAg9gXIA0AAQAfAAANgHQAJgHAGgKQAGgMAAgMQAAgLgFgJQgEgJgIgHQgIgGgKgCIgggBIgyAAg");
	this.shape_25.setTransform(320.6,20.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag5C0QgbgHgUgQQgSgOgJgPQgJgPgIgaIBPgTQAEAOAGAJQAHAKAJAGQAJAGAMADQAMADANAAQAbAAAQgKQAQgKAAgSQAAgQgOgKQgNgIgjgIQgfgGgTgHQgTgGgPgJQgWgLgLgWQgMgWAAgbQAAgZAJgWQAKgVASgRQATgQAXgIQAYgHAdAAQAdAAAYAHQAYAGATAOQAOALAJANQAJAMAJAXIhJAYQgKgZgOgJQgOgKgaAAQgWAAgNAJQgNAJAAAPQAAAQAMAIQALAJAcAGQApAIAVAHQAUAGAOAKQAXAPAMAVQAMAWAAAbQAAAOgDAOQgEAOgHANQgHANgKALQgKALgNAHQgRAMgZAGQgZAGgcAAQgfAAgagIg");
	this.shape_26.setTransform(272,20.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AggC5QgQgDgNgHQgOgGgMgJQgNgJgKgNQgJgMgIgOIgNggQgGgWgEg2QAAgcALgyQAFgSAJgPQAHgQALgMQALgNAMgKQANgJAOgHQAPgHARgDQARgDAQAAQAdAAAZAIQAXAIASAQQATAQAMAYQAMAXAFAeIhRALQgEgWgIgPQgHgOgOgIQgOgIgRAAQgPAAgNAIQgOAIgIAQQgKAPgEAXQgFAXAAAbQAAAcAFAWQAFAWAKAOQAJAPAOAIQAOAHAQAAQAPAAAMgFQANgGAIgLQAMgQAAgZIhGAAIAAhDICXAAIAADDIgnAAQgFgUgIgXQgeAegPAIQgMAFgOADIgcACQgQAAgQgDg");
	this.shape_27.setTransform(239.2,20.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ABCC3IiMj2IAAAMIABAQIAADaIhDAAIAAltIBdAAIB6DXIgBgZIAAi+IBDAAIAAFtg");
	this.shape_28.setTransform(204.8,20.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgpC3IAAltIBTAAIAAFtg");
	this.shape_29.setTransform(179.5,20.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgqC3IAAkkIhbAAIAAhJIELAAIAABJIhbAAIAAEkg");
	this.shape_30.setTransform(158.5,20.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgiC5QgQgEgOgGQgPgHgMgKQgMgKgKgNQgNgSgSgsQgHgXgEgyQAAgaALgwIANggIARgcQAKgNANgKQAMgKAPgHQAPgHARgDQAQgDARAAQATAAAQADQAQADAOAHQAOAGAMAKQAMAKAKAOQAYAnAHAYQALAwAAAZQgEAwgHAXQgRAtgNARQgKANgMAKQgNAJgPAHQgOAHgRAEQgRADgRAAQgSAAgQgDgAgdhuQgNAIgHAQQgIAQgEAXQgEAXAAAYQAAAdAEAWQAEAXAJAPQAIAPANAHQANAHAPAAQAQAAANgHQAMgHAIgPQAIgPAEgWQAEgWAAgeQAAgcgEgXQgEgWgIgPQgIgPgNgHQgMgIgRAAQgQAAgNAIg");
	this.shape_31.setTransform(127.9,20.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgiC5QgQgEgOgGQgPgHgMgKQgMgKgKgNQgNgSgSgsQgHgXgEgyQAAgaALgwIANggIARgcQAKgNANgKQAMgKAPgHQAPgHARgDQAQgDARAAQATAAAQADQAQADAOAHQAOAGAMAKQAMAKAKAOQAYAnAHAYQALAwAAAZQgEAwgHAXQgRAtgNARQgKANgMAKQgNAJgPAHQgOAHgRAEQgRADgRAAQgSAAgQgDgAgdhuQgNAIgHAQQgIAQgEAXQgEAXAAAYQAAAdAEAWQAEAXAJAPQAIAPANAHQANAHAPAAQAQAAANgHQAMgHAIgPQAIgPAEgWQAEgWAAgeQAAgcgEgXQgEgWgIgPQgIgPgNgHQgMgIgRAAQgQAAgNAIg");
	this.shape_32.setTransform(93.2,20.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AA5C3IAAiXIhxAAIAACXIhUAAIAAltIBUAAIAACPIBxAAIAAiPIBUAAIAAFtg");
	this.shape_33.setTransform(58.3,20.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag5C0QgbgHgUgQQgSgOgJgPQgJgPgIgaIBPgTQAEAOAGAJQAHAKAJAGQAJAGAMADQAMADANAAQAbAAAQgKQAQgKAAgSQAAgQgOgKQgNgIgjgIQgfgGgTgHQgTgGgPgJQgWgLgLgWQgMgWAAgbQAAgZAJgWQAKgVASgRQATgQAXgIQAYgHAdAAQAdAAAYAHQAYAGATAOQAOALAJANQAJAMAJAXIhJAYQgKgZgOgJQgOgKgaAAQgWAAgNAJQgNAJAAAPQAAAQAMAIQALAJAcAGQApAIAVAHQAUAGAOAKQAXAPAMAVQAMAWAAAbQAAAOgDAOQgEAOgHANQgHANgKALQgKALgNAHQgRAMgZAGQgZAGgcAAQgfAAgagIg");
	this.shape_34.setTransform(23.8,20.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag+C0QgXgJgRgSQgKgLgGgLQgGgMgGgUIBLgNQAHATAMAKQALAJATAAQASAAAOgMQAOgMAHgWQAFgOADg5QgTAVgSAIQgSAJgZAAQgZAAgVgJQgVgIgPgPQgPgNgIgUQgIgVAAgZQAAgbAJgXQAKgWARgQQASgQAZgJQAZgIAeAAQAUAAAmALQAOAFALAJQALAIAIAKQAKANAIAPIANAhQAKAyAAAdQgDA0gHAYIgMAiQgIAQgKAOQgJANgMAKQgMAKgOAGQgOAHgQADQgQADgQAAQgdAAgXgIgAgXh6QgKAEgIAIQgHAHgFAKQgEALAAALQAAAMAEAKQAEAKAHAIQAIAHAJAEQAKAFALAAQAKAAAKgFQAKgEAIgIQAIgHAEgKQAEgLAAgLQAAgLgEgLQgEgKgIgHQgHgIgKgEQgKgFgJAAQgLAAgKAFg");
	this.shape_35.setTransform(-20.4,20.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag/C1QgagHgRgOQgTgOgJgTQgKgTAAgYQAAgPAEgMQADgMAIgKQAIgKAMgIQAMgIATgHQgcgPgNgTQgMgUAAgbQgBgXAKgUQAKgVASgPQARgPAagHQAYgHAdAAQAdAAAYAHQAYAGARANQASANAIASQAKASAAAVQAAAOgDALQgDALgHAJQgGAKgMAIIgZAPQAUAIAMAHQANAJAIALQAIALAEANQAEANAAAQQAAAagLAVQgKAVgUAPQgUAPgcAHQgcAIghAAQgfAAgbgHgAg4AyQgLALAAATQABAMAEAJQAEAJAJAGQAJAHAMADQANADAPAAQAcAAARgKQARgLAAgSQAAgNgIgLQgJgLgQgHIgygSQgYAIgLAMgAgjh5QgOAKgBASQABATAOALQAOAKApAQQAUgHAJgLQAIgLAAgSQABgWgRgNQgHgGgLgEQgLgDgMAAQgWAAgNALg");
	this.shape_36.setTransform(-52,20.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag4CxQgZgIgVgRQgPgOgKgPQgIgQgHgZIBQgMQAGAZAQALQAOAMAZAAQALAAALgEQALgEAIgIQAIgHAEgLQAEgKABgMQgBgMgEgKQgEgLgJgIQgHgIgLgEQgLgFgKAAQgQAAgOAIQgNAHgJAOIhGgMIAOjOIDlAAIgKBMIieAAIgFBRQARgRASgHQARgHAYAAQAZAAAXAJQAWAIAQAQQAPAQAJATQAJAWAAAZQAAAdgKAZQgKAYgTARQgSARgbAJQgaAJghAAQgeAAgagJg");
	this.shape_37.setTransform(-83.6,20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.1,0,742.7,170);


(lib._13text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AicDlIEDnJIA2AAIkDHJg");
	this.shape.setTransform(72.1,82.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AicHrQhFgYg4g1QgvgqgZgtQgXgtgPhIIDWgeQAJApAPAcQAQAeAWATQAWATAdAIQAdAKAjAAQBFAAAqglQAqgmAAg9QAAgggNgcQgOgdgXgRQgkgWhlAAIhbAAIAAitIBqAAQArAAAdgKQAcgKAUgUQAggiAAgsQAAg0gngjQgmgig5AAQg9AAgkAeQgkAegUBDIjPghQARg6ATgiQATgjAlgkQA4g0BDgaQBEgZBVAAQBOAABCATQBBATAwAkQAvAjAZAyQAaAyAAA7QAAApgLAiQgKAjgWAbQgWAcgfAVQggAWgsAPIBLAYQAaANAaAXQAlAhATAtQATAtAAA0QAABEgbA5QgbA3g0AnQgyAphHAUQhJAVhXAAQhdAAhEgXg");
	this.shape_1.setTransform(153.6,80);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmUH7IAAi3IEvAAIAAo5QjMB2hJAeIAAjOQBRgXCDhCQArgaAggdQAggdATgeICnAAIAAM+IEVAAIAAC3g");
	this.shape_2.setTransform(-4.1,79.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.3,28,255.3,154);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhOAaIAAgzICdAAIAAAzg");
	mask.setTransform(7.9,2.6);

	// Layer 3
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(7.9,2.6,1,1,0,0,0,7.9,2.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.8,5.3);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhOBYIAAivICdAAIAACvg");
	mask.setTransform(8,8.8);

	// Layer 3
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(8,2.7,1,1,0,0,0,7.9,2.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,15.8,5.3);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhOBYIAAivICdAAIAACvg");
	mask.setTransform(8,8.8);

	// Layer 3
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(8,8.8,1,1,0,0,0,8,8.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA291E").s().p("AgEA3IABhvIAIAAIAABvIgFACg");
	this.shape.setTransform(7.9,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAADIgCACIABgEIgDgBIAEgBIAAgDIABADIAEABIgDABIABAEg");
	this.shape_1.setTransform(13.5,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAADIgCACIABgEIgDgBIAEAAIAAgEIABAEIAEAAIgDABIABAEg");
	this.shape_2.setTransform(13.5,4.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAADIgCACIAAgEIgCgBIAEgBIAAgDIABADIAEABIgCABIAAAEg");
	this.shape_3.setTransform(11.7,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAADIgCACIAAgEIgCgBIAEAAIAAgEIABAEIAEAAIgDABIABAEg");
	this.shape_4.setTransform(11.7,4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAADIgCACIABgEIgDgBIAEgBIAAgDIABADIAEABIgDABIABAEg");
	this.shape_5.setTransform(9.8,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAADIgCACIABgEIgDgBIAEAAIAAgEIABAEIAEAAIgDABIABAEg");
	this.shape_6.setTransform(9.8,4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAADIgCACIABgEIgDgBIADgBIABgDIABADIAEABIgDABIABAEg");
	this.shape_7.setTransform(8,2.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAADIgCACIABgEIgDgBIADAAIABgEIABAEIAEAAIgDABIABAEg");
	this.shape_8.setTransform(8,4.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAADIgCACIABgEIgDgBIADgBIABgDIABADIAEABIgDABIABAEg");
	this.shape_9.setTransform(8,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAADIgCACIAAgEIgCgBIAEAAIAAgEIABAEIAEAAIgDABIAAAEg");
	this.shape_10.setTransform(6.1,4.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAADIgCACIABgEIgDgBIAEAAIAAgEIABAEIAEAAIgDABIABAEg");
	this.shape_11.setTransform(4.2,2.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAADIgCACIABgEIgDgBIAEAAIAAgEIABAEIAEAAIgDABIABAEg");
	this.shape_12.setTransform(4.2,4.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAADIgBACIAAgEIgDgBIAEAAIAAgEIABAEIAEAAIgDABIABAEg");
	this.shape_13.setTransform(2.4,2.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAAADIgBACIAAgEIgDgBIAEAAIAAgEIABAEIAEAAIgDABIABAEg");
	this.shape_14.setTransform(2.4,4.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAAADIgCACIAAgEIgCgBIAEAAIAAgEIABAEIAEAAIgDABIAAAEg");
	this.shape_15.setTransform(6.1,2.7);

	this.instance_1 = new lib.ClipGroup_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8,8.8,1,1,0,0,0,8,8.8);

	this.instance.mask = this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.9,17.6);


(lib.nyfull = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.personblue();
	this.instance.parent = this;
	this.instance.setTransform(153.4,47.6,1.176,1.176);

	this.instance_1 = new lib.person();
	this.instance_1.parent = this;
	this.instance_1.setTransform(143.5,61,0.188,0.188,0,0,0,33.1,70.9);

	this.instance_2 = new lib.person();
	this.instance_2.parent = this;
	this.instance_2.setTransform(127.2,61,0.188,0.188,0,0,0,33.1,70.9);

	this.instance_3 = new lib.person();
	this.instance_3.parent = this;
	this.instance_3.setTransform(110.7,61,0.188,0.188,0,0,0,33.1,70.9);

	this.instance_4 = new lib.person();
	this.instance_4.parent = this;
	this.instance_4.setTransform(94.2,61.3,0.188,0.188,0,0,0,33.1,70.9);

	this.instance_5 = new lib.nytext();
	this.instance_5.parent = this;
	this.instance_5.setTransform(106.5,100.4,1,1,0,0,0,58.5,14.3);

	this.instance_6 = new lib.nydonut();
	this.instance_6.parent = this;
	this.instance_6.setTransform(42.6,42.5,1,1,0,0,0,42.6,42.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5).p("AooAAIRRAA");
	this.shape.setTransform(113.4,78.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169.8,114.9);


(lib.nofull = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.personblue();
	this.instance.parent = this;
	this.instance.setTransform(125.3,49.3,1.176,1.176,0,0,0,5.4,11.6);

	this.instance_1 = new lib.person();
	this.instance_1.parent = this;
	this.instance_1.setTransform(106.6,49.4,0.188,0.188,0,0,0,33.1,70.9);

	this.instance_2 = new lib.person();
	this.instance_2.parent = this;
	this.instance_2.setTransform(88.3,49.4,0.188,0.188,0,0,0,33.1,70.9);

	this.instance_3 = new lib.dcdonut();
	this.instance_3.parent = this;
	this.instance_3.setTransform(39.6,39.6,1.385,1.385,0,0,0,28.6,28.6);

	this.instance_4 = new lib.notext();
	this.instance_4.parent = this;
	this.instance_4.setTransform(148.1,81.1,1,1,0,0,0,78.7,14.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5).p("AlsAAILZAA");
	this.shape.setTransform(104.5,64.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226.8,95.5);


(lib.lafull = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.personblue();
	this.instance.parent = this;
	this.instance.setTransform(158.7,55.3,1.176,1.176,0,0,0,5.4,11.6);

	this.instance_1 = new lib.person();
	this.instance_1.parent = this;
	this.instance_1.setTransform(141.5,55.4,0.188,0.188,0,0,0,33.1,70.9);

	this.instance_2 = new lib.person();
	this.instance_2.parent = this;
	this.instance_2.setTransform(124.7,55.4,0.188,0.188,0,0,0,33.1,70.9);

	this.instance_3 = new lib.person();
	this.instance_3.parent = this;
	this.instance_3.setTransform(107.8,55.4,0.188,0.188,0,0,0,33.1,70.9);

	this.instance_4 = new lib.person();
	this.instance_4.parent = this;
	this.instance_4.setTransform(91.1,55.4,0.188,0.188,0,0,0,33.1,70.9);

	this.instance_5 = new lib.latext();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120.8,96.3,1,1,0,0,0,74,14.3);

	this.instance_6 = new lib.ladonut();
	this.instance_6.parent = this;
	this.instance_6.setTransform(41,39.3,1,1,0,0,0,39.4,39.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5).p("Ap/AAIT/AA");
	this.shape.setTransform(114.6,71.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0,229.4,106.8);


(lib.citiesdot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(3.7,3.7,1,1,0,0,0,5.2,5.2);
	this.instance.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,10.5,10.5);


(lib.chifull = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.personblue();
	this.instance.parent = this;
	this.instance.setTransform(172.6,47.3,1.176,1.176);

	this.instance_1 = new lib.person();
	this.instance_1.parent = this;
	this.instance_1.setTransform(160.5,61,0.188,0.188,0,0,0,33.1,70.9);

	this.instance_2 = new lib.person();
	this.instance_2.parent = this;
	this.instance_2.setTransform(143.6,61,0.188,0.188,0,0,0,33.1,70.9);

	this.instance_3 = new lib.person();
	this.instance_3.parent = this;
	this.instance_3.setTransform(126.6,61,0.188,0.188,0,0,0,33.1,70.9);

	this.instance_4 = new lib.person();
	this.instance_4.parent = this;
	this.instance_4.setTransform(109.6,61,0.188,0.188,0,0,0,33.1,70.9);

	this.instance_5 = new lib.person();
	this.instance_5.parent = this;
	this.instance_5.setTransform(92.5,61,0.188,0.188,0,0,0,33.1,70.9);

	this.instance_6 = new lib.chitext();
	this.instance_6.parent = this;
	this.instance_6.setTransform(134.3,28,1,1,0,0,0,49.2,14.3);

	this.instance_7 = new lib.chidonut();
	this.instance_7.parent = this;
	this.instance_7.setTransform(42.6,42.5,1,1,0,0,0,42.6,42.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5).p("ArTAAIWnAA");
	this.shape.setTransform(126.6,75.8,0.842,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188.5,85.1);


(lib._2015textuse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2015shootingstext();
	this.instance.parent = this;
	this.instance.setTransform(488,-8,1,1,0,0,0,269.2,70);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050304").s().p("AcrJ/IAAo5IZJAAIAAI5gEggFAJ/IAAolIR0AAIAAIlgEg1zgAIIAAp2IVuAAIAAJ2g");
	this.shape.setTransform(344.5,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,776.4,184);


(lib._2015red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.personred();
	this.instance.parent = this;
	this.instance.setTransform(823.3,27.2,1,1,0,0,0,12.8,27.2);

	this.instance_1 = new lib.personred();
	this.instance_1.parent = this;
	this.instance_1.setTransform(789.4,27.2,1,1,0,0,0,12.8,27.2);

	this.instance_2 = new lib.personred();
	this.instance_2.parent = this;
	this.instance_2.setTransform(756.5,27.2,1,1,0,0,0,12.8,27.2);

	this.instance_3 = new lib.personred();
	this.instance_3.parent = this;
	this.instance_3.setTransform(723.6,27.2,1,1,0,0,0,12.8,27.2);

	this.instance_4 = new lib.personred();
	this.instance_4.parent = this;
	this.instance_4.setTransform(690.7,27.2,1,1,0,0,0,12.8,27.2);

	this.instance_5 = new lib.personred();
	this.instance_5.parent = this;
	this.instance_5.setTransform(657.8,27.2,1,1,0,0,0,12.8,27.2);

	this.instance_6 = new lib.personred();
	this.instance_6.parent = this;
	this.instance_6.setTransform(625.5,27.2,1,1,0,0,0,12.8,27.2);

	this.instance_7 = new lib.personred();
	this.instance_7.parent = this;
	this.instance_7.setTransform(591.6,27.2,1,1,0,0,0,12.8,27.2);

	this.instance_8 = new lib.personred();
	this.instance_8.parent = this;
	this.instance_8.setTransform(558.7,27.2,1,1,0,0,0,12.8,27.2);

	this.instance_9 = new lib.personred();
	this.instance_9.parent = this;
	this.instance_9.setTransform(525.8,27.2,1,1,0,0,0,12.8,27.2);

	this.instance_10 = new lib.personred();
	this.instance_10.parent = this;
	this.instance_10.setTransform(492.9,27.2,1,1,0,0,0,12.8,27.2);

	this.instance_11 = new lib.personred();
	this.instance_11.parent = this;
	this.instance_11.setTransform(624.5,97.7,1,1,0,0,0,12.8,27.2);

	this.instance_12 = new lib.personred();
	this.instance_12.parent = this;
	this.instance_12.setTransform(590.6,97.7,1,1,0,0,0,12.8,27.2);

	this.instance_13 = new lib.personred();
	this.instance_13.parent = this;
	this.instance_13.setTransform(557.7,97.7,1,1,0,0,0,12.8,27.2);

	this.instance_14 = new lib.personred();
	this.instance_14.parent = this;
	this.instance_14.setTransform(524.8,97.7,1,1,0,0,0,12.8,27.2);

	this.instance_15 = new lib.personred();
	this.instance_15.parent = this;
	this.instance_15.setTransform(491.9,97.7,1,1,0,0,0,12.8,27.2);

	this.instance_16 = new lib.personred();
	this.instance_16.parent = this;
	this.instance_16.setTransform(459,97.7,1,1,0,0,0,12.8,27.2);

	this.instance_17 = new lib.personred();
	this.instance_17.parent = this;
	this.instance_17.setTransform(97.3,97.7,1,1,0,0,0,12.8,27.2);

	this.instance_18 = new lib.personred();
	this.instance_18.parent = this;
	this.instance_18.setTransform(64.3,97.7,1,1,0,0,0,12.8,27.2);

	this.instance_19 = new lib.personred();
	this.instance_19.parent = this;
	this.instance_19.setTransform(31.3,97.7,1,1,0,0,0,12.8,27.2);

	this.instance_20 = new lib.personred();
	this.instance_20.parent = this;
	this.instance_20.setTransform(426.7,97.7,1,1,0,0,0,12.8,27.2);

	this.instance_21 = new lib.personred();
	this.instance_21.parent = this;
	this.instance_21.setTransform(392.8,97.7,1,1,0,0,0,12.8,27.2);

	this.instance_22 = new lib.personred();
	this.instance_22.parent = this;
	this.instance_22.setTransform(359.9,97.7,1,1,0,0,0,12.8,27.2);

	this.instance_23 = new lib.personred();
	this.instance_23.parent = this;
	this.instance_23.setTransform(327,97.7,1,1,0,0,0,12.8,27.2);

	this.instance_24 = new lib.personred();
	this.instance_24.parent = this;
	this.instance_24.setTransform(294.1,97.7,1,1,0,0,0,12.8,27.2);

	this.instance_25 = new lib.personred();
	this.instance_25.parent = this;
	this.instance_25.setTransform(261.2,97.7,1,1,0,0,0,12.8,27.2);

	this.instance_26 = new lib.personred();
	this.instance_26.parent = this;
	this.instance_26.setTransform(228.3,97.7,1,1,0,0,0,12.8,27.2);

	this.instance_27 = new lib.personred();
	this.instance_27.parent = this;
	this.instance_27.setTransform(195.4,97.7,1,1,0,0,0,12.8,27.2);

	this.instance_28 = new lib.personred();
	this.instance_28.parent = this;
	this.instance_28.setTransform(162.5,97.7,1,1,0,0,0,12.8,27.2);

	this.instance_29 = new lib.personred();
	this.instance_29.parent = this;
	this.instance_29.setTransform(129.6,97.7,1,1,0,0,0,12.8,27.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050304").s().p("EhEBAKxIAAr2MBsFAAAIAAL2gAG9iLIAAolMA9FAAAIAAIlg");
	this.shape.setTransform(435.5,68.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,871,137.9);


(lib._2014textuse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2014shootingstext();
	this.instance.parent = this;
	this.instance.setTransform(383,79,1,1,0,0,0,269.2,70);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050304").s().p("AaQKnIAAqJIaFAAIAAKJgEghQAJhIAAovIzEAAIAArYIVQAAIAALYIRMAAIAAIvg");
	this.shape.setTransform(335,68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,754.4,179);


(lib._2014red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.personred();
	this.instance.parent = this;
	this.instance.setTransform(494.7,45.4,1,1,0,0,0,12.8,27.2);

	this.instance_1 = new lib.personred();
	this.instance_1.parent = this;
	this.instance_1.setTransform(461.7,45.4,1,1,0,0,0,12.8,27.2);

	this.instance_2 = new lib.personred();
	this.instance_2.parent = this;
	this.instance_2.setTransform(428.7,45.4,1,1,0,0,0,12.8,27.2);

	this.instance_3 = new lib.personred();
	this.instance_3.parent = this;
	this.instance_3.setTransform(101.3,117.4,1,1,0,0,0,12.8,27.2);

	this.instance_4 = new lib.personred();
	this.instance_4.parent = this;
	this.instance_4.setTransform(68.3,117.4,1,1,0,0,0,12.8,27.2);

	this.instance_5 = new lib.personred();
	this.instance_5.parent = this;
	this.instance_5.setTransform(35.3,117.4,1,1,0,0,0,12.8,27.2);

	this.instance_6 = new lib.personred();
	this.instance_6.parent = this;
	this.instance_6.setTransform(824.1,45.4,1,1,0,0,0,12.8,27.2);

	this.instance_7 = new lib.personred();
	this.instance_7.parent = this;
	this.instance_7.setTransform(790.2,45.4,1,1,0,0,0,12.8,27.2);

	this.instance_8 = new lib.personred();
	this.instance_8.parent = this;
	this.instance_8.setTransform(757.3,45.4,1,1,0,0,0,12.8,27.2);

	this.instance_9 = new lib.personred();
	this.instance_9.parent = this;
	this.instance_9.setTransform(724.4,45.4,1,1,0,0,0,12.8,27.2);

	this.instance_10 = new lib.personred();
	this.instance_10.parent = this;
	this.instance_10.setTransform(691.5,45.4,1,1,0,0,0,12.8,27.2);

	this.instance_11 = new lib.personred();
	this.instance_11.parent = this;
	this.instance_11.setTransform(658.6,45.4,1,1,0,0,0,12.8,27.2);

	this.instance_12 = new lib.personred();
	this.instance_12.parent = this;
	this.instance_12.setTransform(625.7,45.4,1,1,0,0,0,12.8,27.2);

	this.instance_13 = new lib.personred();
	this.instance_13.parent = this;
	this.instance_13.setTransform(592.8,45.4,1,1,0,0,0,12.8,27.2);

	this.instance_14 = new lib.personred();
	this.instance_14.parent = this;
	this.instance_14.setTransform(559.9,45.4,1,1,0,0,0,12.8,27.2);

	this.instance_15 = new lib.personred();
	this.instance_15.parent = this;
	this.instance_15.setTransform(527,45.4,1,1,0,0,0,12.8,27.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050304").s().p("EhCnALZIAAp1IYEAAIAAJ1gAi3AAIAArYMBFfAAAIAALYg");
	this.shape.setTransform(426.5,73);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,853,145.9);


(lib._2013red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.personred();
	this.instance.parent = this;
	this.instance.setTransform(277,102.2,1,1,0,0,0,12.8,27.2);

	this.instance_1 = new lib.personred();
	this.instance_1.parent = this;
	this.instance_1.setTransform(243.8,102.2,1,1,0,0,0,12.8,27.2);

	this.instance_2 = new lib.personred();
	this.instance_2.parent = this;
	this.instance_2.setTransform(210.8,102.2,1,1,0,0,0,12.8,27.2);

	this.instance_3 = new lib.personred();
	this.instance_3.parent = this;
	this.instance_3.setTransform(177.8,102.2,1,1,0,0,0,12.8,27.2);

	this.instance_4 = new lib.personred();
	this.instance_4.parent = this;
	this.instance_4.setTransform(144.8,102.2,1,1,0,0,0,12.8,27.2);

	this.instance_5 = new lib.personred();
	this.instance_5.parent = this;
	this.instance_5.setTransform(111.8,102.2,1,1,0,0,0,12.8,27.2);

	this.instance_6 = new lib.personred();
	this.instance_6.parent = this;
	this.instance_6.setTransform(78.8,102.2,1,1,0,0,0,12.8,27.2);

	this.instance_7 = new lib.personred();
	this.instance_7.parent = this;
	this.instance_7.setTransform(45.8,102.2,1,1,0,0,0,12.8,27.2);

	this.instance_8 = new lib.personred();
	this.instance_8.parent = this;
	this.instance_8.setTransform(12.8,102.2,1,1,0,0,0,12.8,27.2);

	this.instance_9 = new lib.personred();
	this.instance_9.parent = this;
	this.instance_9.setTransform(802.7,27.2,1,1,0,0,0,12.8,27.2);

	this.instance_10 = new lib.personred();
	this.instance_10.parent = this;
	this.instance_10.setTransform(768.7,27.2,1,1,0,0,0,12.8,27.2);

	this.instance_11 = new lib.personred();
	this.instance_11.parent = this;
	this.instance_11.setTransform(735.8,27.2,1,1,0,0,0,12.8,27.2);

	this.instance_12 = new lib.personred();
	this.instance_12.parent = this;
	this.instance_12.setTransform(702.9,27.2,1,1,0,0,0,12.8,27.2);

	this.instance_13 = new lib.personred();
	this.instance_13.parent = this;
	this.instance_13.setTransform(670,27.2,1,1,0,0,0,12.8,27.2);

	this.instance_14 = new lib.personred();
	this.instance_14.parent = this;
	this.instance_14.setTransform(637.1,27.2,1,1,0,0,0,12.8,27.2);

	this.instance_15 = new lib.personred();
	this.instance_15.parent = this;
	this.instance_15.setTransform(604.2,27.2,1,1,0,0,0,12.8,27.2);

	this.instance_16 = new lib.personred();
	this.instance_16.parent = this;
	this.instance_16.setTransform(571.3,27.2,1,1,0,0,0,12.8,27.2);

	this.instance_17 = new lib.personred();
	this.instance_17.parent = this;
	this.instance_17.setTransform(538.4,27.2,1,1,0,0,0,12.8,27.2);

	this.instance_18 = new lib.personred();
	this.instance_18.parent = this;
	this.instance_18.setTransform(505.5,27.2,1,1,0,0,0,12.8,27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,815.4,129.4);


(lib.suninvestigatestag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(8,8.8,1,1,0,0,0,8,8.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcA6Ig6hkIAAAIIAAAHIAABVIgLAAIAAhzIASAAIA2BdIAAgIIAAgIIAAhNIALAAIAABzg");
	this.shape.setTransform(266.9,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJA7IgJgDIgHgEIgHgHIgGgKIgFgKIgCgNIgBgMQAAgIADgPIAEgLIAGgIIAHgIIAIgFIAJgDIAJgBIAKABIAJADIAIAFIAHAHIAGAJIAEAKQADAQAAAIIgBAMIgDANIgFAKIgGAKIgHAHQgEADgEABIgIADIgJABgAgMgsQgGAEgEAGQgFAGgCAKQgCAIAAAKQAAALACAIQACAJAFAHQAEAGAGAEQAGADAGAAQAHAAAGgDQAGgEAEgGQAEgHADgJQACgJAAgKQAAgKgCgJQgDgJgEgGQgEgGgGgEQgGgDgHAAQgGAAgGADg");
	this.shape_1.setTransform(255.7,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGA6IAAhzIANAAIAABzg");
	this.shape_2.setTransform(248,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGA6IAAhmIghAAIAAgNIBPAAIAAANIghAAIAABmg");
	this.shape_3.setTransform(241.6,9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfA6IgMgiIgpAAIgKAiIgNAAIAmhzIAPAAIAmBzgAAQANIgQg2IgSA2IAiAAg");
	this.shape_4.setTransform(232.4,9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHA7IgIgDQgFgBgDgDIgIgHIgGgJIgEgKQgCgGgBgGIgBgOQAAgGAEgRQABgFADgFIAGgJIAHgIIAJgEIAKgEIAJgBQAJAAAIADQAIADAGAIQADAEACAEQADAEACAHIgOAEIgDgKIgFgFQgEgFgFgCQgGgDgGAAQgGAAgHAEQgHAEgEAHQgEAHgCAIQgCAKAAAHQAAAJACAJQACAIAEAHQAFAHAGAEQAIAEAGAAQAGAAAFgCQAGgDADgEQAFgEACgFQABgGAAgGIAAgHIgcAAIAAgLIArAAIAAA7IgJAAIgEgOIgGAHIgHAEIgJADIgKABg");
	this.shape_5.setTransform(221.9,9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGA6IAAhzIANAAIAABzg");
	this.shape_6.setTransform(214.3,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGA6IAAhmIghAAIAAgNIBPAAIAAANIghAAIAABmg");
	this.shape_7.setTransform(207.9,9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPA5QgJgDgGgGQgFgEgDgFIgGgNIAOgCQABAFAEAFQADAEAEAEQAEADAFABQAGABAFAAQAGAAAFgBQAFgBAEgDQAEgDACgEQACgEAAgFQgBgGgEgFQgEgFgJgCIgWgGIgLgCIgIgFQgEgFgDgFQgCgGAAgGQAAgHADgHQACgFAGgFQAFgEAHgCQAIgCAHAAQAHAAAGABQAHADAFADQAGADADAGQAEAGADAGIgNAEIgDgHIgEgGQgFgEgFgBQgGgCgFAAQgEAAgFABIgIAEIgFAGQgCAEAAAEQAAAHAEAEQAFAEAKADIAUAEQAHADAGADQAFAAAFAEQADAEACAGQACAEAAAHQAAAHgDAHQgDAGgGAFQgGAFgHACQgIADgKAAQgJAAgIgDg");
	this.shape_8.setTransform(198.5,9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkA6IAAhzIBIAAIAAANIg6AAIAAAlIAuAAIAAAKIguAAIAAAqIA7AAIAAANg");
	this.shape_9.setTransform(189.5,9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFA6IgohzIAPAAIAfBeIAgheIANAAIgnBzg");
	this.shape_10.setTransform(179.6,9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAcA6Ig6hkIAAAIIAAAHIAABVIgLAAIAAhzIASAAIA2BdIAAgIIAAgIIAAhNIALAAIAABzg");
	this.shape_11.setTransform(169.2,9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGA6IAAhzIANAAIAABzg");
	this.shape_12.setTransform(161.3,9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAcA6Ig6hkIAAAIIAAAHIAABVIgLAAIAAhzIASAAIA2BdIAAgIIAAgIIAAhNIALAAIAABzg");
	this.shape_13.setTransform(149,9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKA6IgJgDIgHgEIgGgGQgEgGgBgGQgCgHAAgKIAAhKIAOAAIAABKQABAJABAEQABAFADADQACAFAHACQAGACAEAAQAHAAAFgCQAGgDADgEQAEgDABgFQABgFAAgIIAAhKIAMAAIAABKQAAAKgCAHQgBAGgFAGIgFAGIgIAEIgJADIgJABg");
	this.shape_14.setTransform(138.1,9.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQA5QgIgDgGgGQgFgEgCgFIgHgNIAOgCQACAFACAFQADAEAFAEQAEADAFABQAGABAEAAQAHAAAGgBQAEgBAEgDQAEgDABgEQACgEABgFQAAgGgFgFQgFgFgIgCIgWgGIgLgCIgHgFQgFgFgDgFQgCgGAAgGQAAgHADgHQACgFAGgFQAFgEAHgCQAIgCAHAAQAHAAAHABQAGADAFADQAFADAEAGQAEAGADAGIgOAEIgCgHIgEgGQgFgEgGgBQgFgCgFAAQgFAAgEABIgIAEIgFAGQgCAEAAAEQAAAHAFAEQAEAEAKADIAUAEQAHADAGADQAFAAAEAEQAEAEACAGQACAEAAAHQAAAHgDAHQgDAGgGAFQgFAFgJACQgHADgLAAQgIAAgJgDg");
	this.shape_15.setTransform(127.6,9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkA6IAAhzIBHAAIAAANIg4AAIAAAlIAsAAIAAAKIgsAAIAAAqIA6AAIAAANg");
	this.shape_16.setTransform(114.2,9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAaA6IgVgzIggAAIAAAzIgNAAIAAhzIArAAQAIAAAHADQAHACAFAEQAFAFADAGQACAGAAAHQAAAGgCAGQgCAFgEAEIgFADIgIAEIAWA2gAgbgDIAdAAQAGAAAEgBQAFgCADgDQADgDABgEQACgEAAgEQAAgFgCgEQgBgDgDgDIgHgEIgKgBIgeAAg");
	this.shape_17.setTransform(103.9,9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJA7IgJgDIgHgEIgHgHIgGgKIgFgKIgCgNIgBgMQAAgIADgPIAEgLIAGgIIAHgIIAIgFIAJgDIAJgBIAKABIAJADIAIAFIAHAHIAGAJIAEAKQADAQAAAIIgBAMIgDANIgFAKIgGAKIgHAHQgEADgEABIgIADIgJABgAgMgsQgGAEgEAGQgFAGgCAKQgCAIAAAKQAAALACAIQACAJAFAHQAEAGAGAEQAGADAGAAQAHAAAGgDQAGgEAEgGQAEgHADgJQACgJAAgKQAAgKgCgJQgDgJgEgGQgEgGgGgEQgGgDgHAAQgGAAgGADg");
	this.shape_18.setTransform(92.8,9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AApA6IAAhkIglBkIgIAAIgmhkIAABkIgNAAIAAhzIAWAAIAhBbIAjhbIAVAAIAABzg");
	this.shape_19.setTransform(80.3,9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGA6IAAhzIANAAIAABzg");
	this.shape_20.setTransform(71,9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgGA6IAAhmIghAAIAAgNIBPAAIAAANIghAAIAABmg");
	this.shape_21.setTransform(64.6,9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AghA6IAAhzIAPAAIAABmIA0AAIAAANg");
	this.shape_22.setTransform(56.7,9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAfA6IgMgiIgpAAIgKAiIgNAAIAmhzIAPAAIAmBzgAAQANIgQg2IgSA2IAiAAg");
	this.shape_23.setTransform(46.9,9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgoA6IAAhzIAsAAQAHAAAFACQAFABAFADQAGAEADAGQADAGAAAHQAAAFgCAGQgCAFgEAEQgEADgJADIAJACIAGADQAFAFACAGQACAFAAAGQAAAJgDAHQgEAHgHAFQgFACgFABQgGACgHAAgAgaAtIAdAAIAKgBIAIgEQADgDABgEQACgDAAgFQAAgFgCgEQgBgEgDgDQgEgEgEgBQgFgCgHAAIgbAAgAgagHIAZAAIAKgBQAEgBADgCQAEgDACgEQACgEAAgFQAAgEgCgDQgBgEgDgCIgIgEIgJgBIgbAAg");
	this.shape_24.setTransform(37.3,9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAfA6IgMgiIgpAAIgKAiIgNAAIAmhzIAPAAIAmBzgAAQANIgQg2IgSA2IAiAAg");
	this.shape_25.setTransform(22.4,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,280.9,22.7);


// stage content:
(lib.s2kintroanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1071 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_1076 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1071).call(this.frame_1071).wait(5).call(this.frame_1076).wait(484));

	// tagline
	this.instance = new lib.tagline();
	this.instance.parent = this;
	this.instance.setTransform(509.8,480.3,1,1,0,0,0,443.9,20.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1036).to({_off:false},0).to({alpha:1},11).to({_off:true},72).wait(441));

	// LOGO TO KILL 
	this.instance_1 = new lib.logotokill();
	this.instance_1.parent = this;
	this.instance_1.setTransform(475.9,328.2,1,1,0,0,0,304.8,98.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1001).to({_off:false},0).to({x:485.9,alpha:1},9).to({_off:true},109).wait(441));

	// LOGO SHOOT
	this.instance_2 = new lib.logoshoot();
	this.instance_2.parent = this;
	this.instance_2.setTransform(542.1,165.5,1,1,0,0,0,276.7,98.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(995).to({_off:false},0).to({x:532.1,alpha:1},9).to({_off:true},115).wait(441));

	// LOGO-GUN
	this.instance_3 = new lib.gun();
	this.instance_3.parent = this;
	this.instance_3.setTransform(195.2,136.3,0.307,0.307,0,0,0,27.9,20.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1009).to({_off:false},0).to({regY:20.4,scaleX:1.74,scaleY:1.74,x:195.1,y:136.1},7).to({_off:true},103).wait(441));

	// investigstes
	this.instance_4 = new lib.suninvestigatestag();
	this.instance_4.parent = this;
	this.instance_4.setTransform(498.9,569.9,1.292,1.292,0,0,0,140.3,11.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(923).to({_off:false},0).to({x:488.9,alpha:1},10).to({_off:true},178).wait(449));

	// HOW TEXT
	this.instance_5 = new lib.howdidwetext();
	this.instance_5.parent = this;
	this.instance_5.setTransform(479,200.1,1,1,0,0,0,228.7,22);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(903).to({_off:false},0).to({x:489,alpha:1},10,cjs.Ease.get(0.6)).wait(52).to({alpha:0},9).to({_off:true},137).wait(449));

	// new background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050304").s().p("EgB0A/bMAAAh+1IDpAAMAAAB+1g");
	this.shape.setTransform(1014.6,297.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#050304").s().p("EgKTBB5MAAAiDxIUnAAMAAACDxg");
	this.shape_1.setTransform(964.4,303.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#050304").s().p("EgSYBEQMAAAiIfMAkxAAAMAAACIfg");
	this.shape_2.setTransform(916.6,309.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#050304").s().p("EgaDBGfMAAAiM9MA0HAAAMAAACM9g");
	this.shape_3.setTransform(871.2,315.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#050304").s().p("EghUBImMAAAiRLMBCpAAAMAAACRLg");
	this.shape_4.setTransform(828.2,321.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#050304").s().p("EgoLBKmMAAAiVLMBQXAAAMAAACVLg");
	this.shape_5.setTransform(787.6,326.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#050304").s().p("EguoBMeMAAAiY7MBdRAAAMAAACY7g");
	this.shape_6.setTransform(749.4,331.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#050304").s().p("Eg0qBOPMAAAicdMBpVAAAMAAACcdg");
	this.shape_7.setTransform(713.6,335.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#050304").s().p("Eg6TBP4MAAAifvMB0nAAAMAAACfvg");
	this.shape_8.setTransform(680.3,340);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#050304").s().p("Eg/iBRZMAAAiixMB/FAAAMAAACixg");
	this.shape_9.setTransform(649.3,343.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#050304").s().p("EhEWBSzMAAAillMCItAAAMAAACllg");
	this.shape_10.setTransform(620.8,347.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#050304").s().p("EhIxBUGMAAAioKMCRjAAAMAAACoKg");
	this.shape_11.setTransform(594.7,350.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#050304").s().p("EhMxBVQMAAAiqfMCZjAAAMAAACqfg");
	this.shape_12.setTransform(571,353.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#050304").s().p("EhQXBWTMAAAislMCgvAAAMAAACslg");
	this.shape_13.setTransform(549.7,356.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#050304").s().p("EhTjBXPMAAAiudMCnIAAAMAAACudg");
	this.shape_14.setTransform(530.8,359);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#050304").s().p("EhWWBYDMAAAiwEMCstAAAMAAACwEg");
	this.shape_15.setTransform(514.3,361.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#050304").s().p("EhYuBYvMAAAixdMCxdAAAMAAACxdg");
	this.shape_16.setTransform(500.2,362.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},875).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},198).to({state:[]},1).wait(470));

	// 2015-red
	this.instance_6 = new lib._2015red();
	this.instance_6.parent = this;
	this.instance_6.setTransform(529.4,490.1,1,1,0,0,0,435.4,68.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(826).to({_off:false},0).to({alpha:1},10).to({_off:true},105).wait(619));

	// MASK4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_807 = new cjs.Graphics().p("AhQFdIAAq5ICiAAIAAK5g");
	var mask_graphics_808 = new cjs.Graphics().p("AnkFdIAAq5IPJAAIAAK5g");
	var mask_graphics_809 = new cjs.Graphics().p("At4FdIAAq5IbwAAIAAK5g");
	var mask_graphics_810 = new cjs.Graphics().p("A0LFdIAAq5MAoXAAAIAAK5g");
	var mask_graphics_811 = new cjs.Graphics().p("A6fFdIAAq5MA0/AAAIAAK5g");
	var mask_graphics_812 = new cjs.Graphics().p("EggyAFdIAAq5MBBlAAAIAAK5g");
	var mask_graphics_813 = new cjs.Graphics().p("EgnFAFdIAAq5MBOLAAAIAAK5g");
	var mask_graphics_814 = new cjs.Graphics().p("EgtZAFdIAAq5MBazAAAIAAK5g");
	var mask_graphics_815 = new cjs.Graphics().p("EgzsAFdIAAq5MBnZAAAIAAK5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(807).to({graphics:mask_graphics_807,x:747.8,y:518}).wait(1).to({graphics:mask_graphics_808,x:707.5,y:518}).wait(1).to({graphics:mask_graphics_809,x:667.1,y:518}).wait(1).to({graphics:mask_graphics_810,x:626.8,y:518}).wait(1).to({graphics:mask_graphics_811,x:586.4,y:518}).wait(1).to({graphics:mask_graphics_812,x:546,y:518}).wait(1).to({graphics:mask_graphics_813,x:505.7,y:518}).wait(1).to({graphics:mask_graphics_814,x:465.3,y:518}).wait(1).to({graphics:mask_graphics_815,x:425,y:518}).wait(745));

	// 2015-row-4
	this.instance_7 = new lib.person();
	this.instance_7.parent = this;
	this.instance_7.setTransform(718.1,518.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_8 = new lib.person();
	this.instance_8.parent = this;
	this.instance_8.setTransform(685.2,518.1,0.372,0.372,0,0,0,33.3,71);

	this.instance_9 = new lib.person();
	this.instance_9.parent = this;
	this.instance_9.setTransform(652.3,518.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_10 = new lib.person();
	this.instance_10.parent = this;
	this.instance_10.setTransform(619.4,518.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_11 = new lib.person();
	this.instance_11.parent = this;
	this.instance_11.setTransform(586.5,518.1,0.372,0.372,0,0,0,33.3,71);

	this.instance_12 = new lib.person();
	this.instance_12.parent = this;
	this.instance_12.setTransform(520.7,518.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_13 = new lib.person();
	this.instance_13.parent = this;
	this.instance_13.setTransform(553.6,518.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_14 = new lib.person();
	this.instance_14.parent = this;
	this.instance_14.setTransform(487.9,518.1,0.372,0.372,0,0,0,33.6,71);

	this.instance_15 = new lib.person();
	this.instance_15.parent = this;
	this.instance_15.setTransform(454.9,518.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_16 = new lib.person();
	this.instance_16.parent = this;
	this.instance_16.setTransform(422,518.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_17 = new lib.person();
	this.instance_17.parent = this;
	this.instance_17.setTransform(389.1,518.1,0.372,0.372,0,0,0,33.3,71);

	this.instance_18 = new lib.person();
	this.instance_18.parent = this;
	this.instance_18.setTransform(356.2,518.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_19 = new lib.person();
	this.instance_19.parent = this;
	this.instance_19.setTransform(323.3,518.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_20 = new lib.person();
	this.instance_20.parent = this;
	this.instance_20.setTransform(290.4,518.1,0.372,0.372,0,0,0,33.3,71);

	this.instance_21 = new lib.person();
	this.instance_21.parent = this;
	this.instance_21.setTransform(224.6,518.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_22 = new lib.person();
	this.instance_22.parent = this;
	this.instance_22.setTransform(158.8,518.1,0.372,0.372,0,0,0,33.3,71);

	this.instance_23 = new lib.person();
	this.instance_23.parent = this;
	this.instance_23.setTransform(257.5,518.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_24 = new lib.person();
	this.instance_24.parent = this;
	this.instance_24.setTransform(191.7,518.1,0.372,0.372,0,0,0,33.3,71);

	this.instance_25 = new lib.person();
	this.instance_25.parent = this;
	this.instance_25.setTransform(125.9,518.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = this.instance_21.mask = this.instance_22.mask = this.instance_23.mask = this.instance_24.mask = this.instance_25.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]},807).to({state:[]},128).wait(625));

	// MASK3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_795 = new cjs.Graphics().p("Ag9FyIAArjIB6AAIAALjg");
	var mask_1_graphics_796 = new cjs.Graphics().p("AmlFyIAArjINLAAIAALjg");
	var mask_1_graphics_797 = new cjs.Graphics().p("AsOFyIAArjIYcAAIAALjg");
	var mask_1_graphics_798 = new cjs.Graphics().p("Ax1FyIAArjMAjsAAAIAALjg");
	var mask_1_graphics_799 = new cjs.Graphics().p("A3eFyIAArjMAu9AAAIAALjg");
	var mask_1_graphics_800 = new cjs.Graphics().p("A9GFyIAArjMA6OAAAIAALjg");
	var mask_1_graphics_801 = new cjs.Graphics().p("EgivAFyIAArjMBFfAAAIAALjg");
	var mask_1_graphics_802 = new cjs.Graphics().p("EgoYAFyIAArjMBQxAAAIAALjg");
	var mask_1_graphics_803 = new cjs.Graphics().p("EguAAFyIAArjMBcBAAAIAALjg");
	var mask_1_graphics_804 = new cjs.Graphics().p("EgzoAFyIAArjMBnRAAAIAALjg");
	var mask_1_graphics_805 = new cjs.Graphics().p("Eg5QAFyIAArjMByhAAAIAALjg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(795).to({graphics:mask_1_graphics_795,x:219.4,y:439.8}).wait(1).to({graphics:mask_1_graphics_796,x:255.3,y:439.8}).wait(1).to({graphics:mask_1_graphics_797,x:291.2,y:439.8}).wait(1).to({graphics:mask_1_graphics_798,x:327.1,y:439.8}).wait(1).to({graphics:mask_1_graphics_799,x:363,y:439.8}).wait(1).to({graphics:mask_1_graphics_800,x:398.9,y:439.8}).wait(1).to({graphics:mask_1_graphics_801,x:434.8,y:439.8}).wait(1).to({graphics:mask_1_graphics_802,x:470.7,y:439.8}).wait(1).to({graphics:mask_1_graphics_803,x:506.6,y:439.8}).wait(1).to({graphics:mask_1_graphics_804,x:542.5,y:439.8}).wait(1).to({graphics:mask_1_graphics_805,x:578.4,y:439.8}).wait(755));

	// 2015-row-3
	this.instance_26 = new lib.person();
	this.instance_26.parent = this;
	this.instance_26.setTransform(917.2,447.6,0.372,0.372,0,0,0,33.6,71);

	this.instance_27 = new lib.person();
	this.instance_27.parent = this;
	this.instance_27.setTransform(883.7,447.6,0.372,0.372,0,0,0,33.6,71);

	this.instance_28 = new lib.person();
	this.instance_28.parent = this;
	this.instance_28.setTransform(850.7,447.6,0.372,0.372,0,0,0,33.5,71);

	this.instance_29 = new lib.person();
	this.instance_29.parent = this;
	this.instance_29.setTransform(817.8,447.6,0.372,0.372,0,0,0,33.5,71);

	this.instance_30 = new lib.person();
	this.instance_30.parent = this;
	this.instance_30.setTransform(784.9,447.6,0.372,0.372,0,0,0,33.3,71);

	this.instance_31 = new lib.person();
	this.instance_31.parent = this;
	this.instance_31.setTransform(752,447.6,0.372,0.372,0,0,0,33.5,71);

	this.instance_32 = new lib.person();
	this.instance_32.parent = this;
	this.instance_32.setTransform(719.1,447.6,0.372,0.372,0,0,0,33.5,71);

	this.instance_33 = new lib.person();
	this.instance_33.parent = this;
	this.instance_33.setTransform(686.2,447.6,0.372,0.372,0,0,0,33.3,71);

	this.instance_34 = new lib.person();
	this.instance_34.parent = this;
	this.instance_34.setTransform(620.4,447.6,0.372,0.372,0,0,0,33.5,71);

	this.instance_35 = new lib.person();
	this.instance_35.parent = this;
	this.instance_35.setTransform(653.3,447.6,0.372,0.372,0,0,0,33.5,71);

	this.instance_36 = new lib.person();
	this.instance_36.parent = this;
	this.instance_36.setTransform(587.6,447.6,0.372,0.372,0,0,0,33.6,71);

	this.instance_37 = new lib.person();
	this.instance_37.parent = this;
	this.instance_37.setTransform(554.6,447.6,0.372,0.372,0,0,0,33.5,71);

	this.instance_38 = new lib.person();
	this.instance_38.parent = this;
	this.instance_38.setTransform(521.7,447.6,0.372,0.372,0,0,0,33.5,71);

	this.instance_39 = new lib.person();
	this.instance_39.parent = this;
	this.instance_39.setTransform(488.8,447.6,0.372,0.372,0,0,0,33.3,71);

	this.instance_40 = new lib.person();
	this.instance_40.parent = this;
	this.instance_40.setTransform(455.9,447.6,0.372,0.372,0,0,0,33.5,71);

	this.instance_41 = new lib.person();
	this.instance_41.parent = this;
	this.instance_41.setTransform(423,447.6,0.372,0.372,0,0,0,33.5,71);

	this.instance_42 = new lib.person();
	this.instance_42.parent = this;
	this.instance_42.setTransform(390.1,447.6,0.372,0.372,0,0,0,33.3,71);

	this.instance_43 = new lib.person();
	this.instance_43.parent = this;
	this.instance_43.setTransform(324.3,447.6,0.372,0.372,0,0,0,33.5,71);

	this.instance_44 = new lib.person();
	this.instance_44.parent = this;
	this.instance_44.setTransform(258.5,447.6,0.372,0.372,0,0,0,33.3,71);

	this.instance_45 = new lib.person();
	this.instance_45.parent = this;
	this.instance_45.setTransform(357.2,447.6,0.372,0.372,0,0,0,33.5,71);

	this.instance_46 = new lib.person();
	this.instance_46.parent = this;
	this.instance_46.setTransform(291.4,447.6,0.372,0.372,0,0,0,33.3,71);

	this.instance_47 = new lib.person();
	this.instance_47.parent = this;
	this.instance_47.setTransform(225.6,447.6,0.372,0.372,0,0,0,33.5,71);

	this.instance_26.mask = this.instance_27.mask = this.instance_28.mask = this.instance_29.mask = this.instance_30.mask = this.instance_31.mask = this.instance_32.mask = this.instance_33.mask = this.instance_34.mask = this.instance_35.mask = this.instance_36.mask = this.instance_37.mask = this.instance_38.mask = this.instance_39.mask = this.instance_40.mask = this.instance_41.mask = this.instance_42.mask = this.instance_43.mask = this.instance_44.mask = this.instance_45.mask = this.instance_46.mask = this.instance_47.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]},795).to({state:[]},140).wait(625));

	// 2015 text
	this.instance_48 = new lib._2015textuse();
	this.instance_48.parent = this;
	this.instance_48.setTransform(490.2,199.1,1,1,0,0,0,388.2,88);
	this.instance_48.alpha = 0;
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(769).to({_off:false},0).to({alpha:1},11).to({_off:true},155).wait(625));

	// 2014-red
	this.instance_49 = new lib._2014red();
	this.instance_49.parent = this;
	this.instance_49.setTransform(518.4,404,1,1,0,0,0,426.4,73);
	this.instance_49.alpha = 0;
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(722).to({_off:false},0).to({alpha:1},7).wait(53).to({alpha:0},9).to({_off:true},47).wait(722));

	// MASK3 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_704 = new cjs.Graphics().p("Ag9EHIAAoNIB7AAIAAINg");
	var mask_2_graphics_705 = new cjs.Graphics().p("AigEHIAAoNIFBAAIAAINg");
	var mask_2_graphics_706 = new cjs.Graphics().p("AkDEHIAAoNIIHAAIAAINg");
	var mask_2_graphics_707 = new cjs.Graphics().p("AlmEHIAAoNILOAAIAAINg");
	var mask_2_graphics_708 = new cjs.Graphics().p("AnKEHIAAoNIOUAAIAAINg");
	var mask_2_graphics_709 = new cjs.Graphics().p("AotEHIAAoNIRbAAIAAINg");
	var mask_2_graphics_710 = new cjs.Graphics().p("AqQEHIAAoNIUhAAIAAINg");
	var mask_2_graphics_951 = new cjs.Graphics().p("AqQEHIAAoNIUhAAIAAINg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(704).to({graphics:mask_2_graphics_704,x:219.4,y:447.5}).wait(1).to({graphics:mask_2_graphics_705,x:209.5,y:447.5}).wait(1).to({graphics:mask_2_graphics_706,x:199.5,y:447.5}).wait(1).to({graphics:mask_2_graphics_707,x:189.6,y:447.5}).wait(1).to({graphics:mask_2_graphics_708,x:179.7,y:447.5}).wait(1).to({graphics:mask_2_graphics_709,x:169.7,y:447.5}).wait(1).to({graphics:mask_2_graphics_710,x:159.8,y:447.5}).wait(241).to({graphics:mask_2_graphics_951,x:159.8,y:447.5}).wait(609));

	// 2014-row3
	this.instance_50 = new lib.person();
	this.instance_50.parent = this;
	this.instance_50.setTransform(192.7,447.6,0.372,0.372,0,0,0,33.5,71);

	this.instance_51 = new lib.person();
	this.instance_51.parent = this;
	this.instance_51.setTransform(159.8,447.6,0.372,0.372,0,0,0,33.3,71);

	this.instance_52 = new lib.person();
	this.instance_52.parent = this;
	this.instance_52.setTransform(126.9,447.6,0.372,0.372,0,0,0,33.5,71);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#050304").s().p("AgnESIAAokIBOAAIAAIkg");
	this.shape_17.setTransform(127.9,464.1);

	this.instance_50.mask = this.instance_51.mask = this.instance_52.mask = this.shape_17.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50}]},704).to({state:[{t:this.shape_17},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50}]},247).to({state:[]},1).wait(608));

	// MASK2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_697 = new cjs.Graphics().p("AgTGeIAAs7IAnAAIAAM7g");
	var mask_3_graphics_698 = new cjs.Graphics().p("AkeGeIAAs7II9AAIAAM7g");
	var mask_3_graphics_699 = new cjs.Graphics().p("AopGeIAAs7IRTAAIAAM7g");
	var mask_3_graphics_700 = new cjs.Graphics().p("As0GeIAAs7IZpAAIAAM7g");
	var mask_3_graphics_701 = new cjs.Graphics().p("AxAGeIAAs7MAiBAAAIAAM7g");
	var mask_3_graphics_702 = new cjs.Graphics().p("A1LGeIAAs7MAqXAAAIAAM7g");
	var mask_3_graphics_703 = new cjs.Graphics().p("A5XGeIAAs7MAyuAAAIAAM7g");
	var mask_3_graphics_951 = new cjs.Graphics().p("A5XGeIAAs7MAyuAAAIAAM7g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(697).to({graphics:mask_3_graphics_697,x:608.6,y:372.4}).wait(1).to({graphics:mask_3_graphics_698,x:634.9,y:372.4}).wait(1).to({graphics:mask_3_graphics_699,x:661.2,y:372.4}).wait(1).to({graphics:mask_3_graphics_700,x:687.5,y:372.4}).wait(1).to({graphics:mask_3_graphics_701,x:713.8,y:372.4}).wait(1).to({graphics:mask_3_graphics_702,x:740.1,y:372.4}).wait(1).to({graphics:mask_3_graphics_703,x:766.4,y:372.4}).wait(248).to({graphics:mask_3_graphics_951,x:766.4,y:372.4}).wait(609));

	// 2014-row2
	this.instance_53 = new lib.person();
	this.instance_53.parent = this;
	this.instance_53.setTransform(619,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_54 = new lib.person();
	this.instance_54.parent = this;
	this.instance_54.setTransform(915.1,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_55 = new lib.person();
	this.instance_55.parent = this;
	this.instance_55.setTransform(882.2,376.5,0.372,0.372,0,0,0,33.3,71);

	this.instance_56 = new lib.person();
	this.instance_56.parent = this;
	this.instance_56.setTransform(816.4,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_57 = new lib.person();
	this.instance_57.parent = this;
	this.instance_57.setTransform(750.6,376.5,0.372,0.372,0,0,0,33.3,71);

	this.instance_58 = new lib.person();
	this.instance_58.parent = this;
	this.instance_58.setTransform(849.3,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_59 = new lib.person();
	this.instance_59.parent = this;
	this.instance_59.setTransform(783.5,376.5,0.372,0.372,0,0,0,33.3,71);

	this.instance_60 = new lib.person();
	this.instance_60.parent = this;
	this.instance_60.setTransform(717.7,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_61 = new lib.person();
	this.instance_61.parent = this;
	this.instance_61.setTransform(684.8,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_62 = new lib.person();
	this.instance_62.parent = this;
	this.instance_62.setTransform(651.9,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_53.mask = this.instance_54.mask = this.instance_55.mask = this.instance_56.mask = this.instance_57.mask = this.instance_58.mask = this.instance_59.mask = this.instance_60.mask = this.instance_61.mask = this.instance_62.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53}]},697).to({state:[{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53}]},254).to({state:[]},1).wait(608));

	// 2014 text
	this.instance_63 = new lib._2014textuse();
	this.instance_63.parent = this;
	this.instance_63.setTransform(491.2,205.6,1,1,0,0,0,377.2,89.5);
	this.instance_63.alpha = 0;
	this.instance_63._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(687).to({_off:false},0).to({x:501.2,alpha:1},10,cjs.Ease.get(0.6)).wait(63).to({x:491.2,alpha:0},6).wait(132).to({x:501.2,alpha:1},0).to({_off:true},1).wait(661));

	// 2013red
	this.instance_64 = new lib._2013red();
	this.instance_64.parent = this;
	this.instance_64.setTransform(521.2,413.9,1,1,0,0,0,407.7,64.7);
	this.instance_64.alpha = 0;
	this.instance_64._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(629).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(0.6)).wait(58).to({alpha:0},8,cjs.Ease.get(0.6)).to({_off:true},151).wait(704));

	// black bar
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#050304").s().p("AjMQmIAAiHIBQAAIAACHgEhCnAHUIAAt5MAyeAAAIAADsIAKAAIAABRIgKAAIAAHrI+KAAIAABRgAjMF5IAAibIBQAAIAACbgANwjdIAAtIMA04AAAIAANIg");
	this.shape_18.setTransform(518.5,456.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#050304").s().p("AjMQmIAAiHIBQAAIAACHgEhCnAHUIAAt5MAyeAAAIAAN5gAjMF5IAAibIBQAAIAACbgANwjdIAAtIMA04AAAIAANIg");
	this.shape_19.setTransform(518.5,456.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18}]},636).to({state:[{t:this.shape_19}]},330).to({state:[]},1).wait(593));

	// MASK3 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("A8RGLIAAsUMA4jAAAIAAMUg");
	var mask_4_graphics_606 = new cjs.Graphics().p("AhKGLIAAsUICVAAIAAMUg");
	var mask_4_graphics_607 = new cjs.Graphics().p("Aj3GLIAAsUIHvAAIAAMUg");
	var mask_4_graphics_608 = new cjs.Graphics().p("AmlGLIAAsUINLAAIAAMUg");
	var mask_4_graphics_609 = new cjs.Graphics().p("ApSGLIAAsUISlAAIAAMUg");
	var mask_4_graphics_610 = new cjs.Graphics().p("AsAGLIAAsUIYBAAIAAMUg");
	var mask_4_graphics_611 = new cjs.Graphics().p("AutGLIAAsUIdbAAIAAMUg");
	var mask_4_graphics_612 = new cjs.Graphics().p("AxbGLIAAsUMAi2AAAIAAMUg");
	var mask_4_graphics_613 = new cjs.Graphics().p("A0IGLIAAsUMAoRAAAIAAMUg");
	var mask_4_graphics_614 = new cjs.Graphics().p("A22GLIAAsUMAttAAAIAAMUg");
	var mask_4_graphics_615 = new cjs.Graphics().p("A5jGLIAAsUMAzHAAAIAAMUg");
	var mask_4_graphics_616 = new cjs.Graphics().p("A8RGLIAAsUMA4jAAAIAAMUg");
	var mask_4_graphics_966 = new cjs.Graphics().p("A8RGLIAAsUMA4jAAAIAAMUg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:275,y:463.7}).wait(606).to({graphics:mask_4_graphics_606,x:101.6,y:463.7}).wait(1).to({graphics:mask_4_graphics_607,x:118.9,y:463.7}).wait(1).to({graphics:mask_4_graphics_608,x:136.3,y:463.7}).wait(1).to({graphics:mask_4_graphics_609,x:153.6,y:463.7}).wait(1).to({graphics:mask_4_graphics_610,x:171,y:463.7}).wait(1).to({graphics:mask_4_graphics_611,x:188.3,y:463.7}).wait(1).to({graphics:mask_4_graphics_612,x:205.6,y:463.7}).wait(1).to({graphics:mask_4_graphics_613,x:223,y:463.7}).wait(1).to({graphics:mask_4_graphics_614,x:240.3,y:463.7}).wait(1).to({graphics:mask_4_graphics_615,x:257.7,y:463.7}).wait(1).to({graphics:mask_4_graphics_616,x:275,y:463.7}).wait(350).to({graphics:mask_4_graphics_966,x:275,y:463.7}).wait(594));

	// 2013 row 3
	this.instance_65 = new lib.person();
	this.instance_65.parent = this;
	this.instance_65.setTransform(126.9,450.6,0.372,0.372,0,0,0,33.5,71);

	this.instance_66 = new lib.person();
	this.instance_66.parent = this;
	this.instance_66.setTransform(390.1,450.6,0.372,0.372,0,0,0,33.3,71);

	this.instance_67 = new lib.person();
	this.instance_67.parent = this;
	this.instance_67.setTransform(324.3,450.6,0.372,0.372,0,0,0,33.5,71);

	this.instance_68 = new lib.person();
	this.instance_68.parent = this;
	this.instance_68.setTransform(258.5,450.6,0.372,0.372,0,0,0,33.3,71);

	this.instance_69 = new lib.person();
	this.instance_69.parent = this;
	this.instance_69.setTransform(357.2,450.6,0.372,0.372,0,0,0,33.5,71);

	this.instance_70 = new lib.person();
	this.instance_70.parent = this;
	this.instance_70.setTransform(291.4,450.6,0.372,0.372,0,0,0,33.3,71);

	this.instance_71 = new lib.person();
	this.instance_71.parent = this;
	this.instance_71.setTransform(225.6,450.6,0.372,0.372,0,0,0,33.5,71);

	this.instance_72 = new lib.person();
	this.instance_72.parent = this;
	this.instance_72.setTransform(192.7,450.6,0.372,0.372,0,0,0,33.5,71);

	this.instance_73 = new lib.person();
	this.instance_73.parent = this;
	this.instance_73.setTransform(159.8,450.6,0.372,0.372,0,0,0,33.5,71);

	this.instance_65.mask = this.instance_66.mask = this.instance_67.mask = this.instance_68.mask = this.instance_69.mask = this.instance_70.mask = this.instance_71.mask = this.instance_72.mask = this.instance_73.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65}]},606).to({state:[{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65}]},360).to({state:[]},1).wait(593));

	// MASK2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_595 = new cjs.Graphics().p("AgiFoIAArOIBFAAIAALOg");
	var mask_5_graphics_596 = new cjs.Graphics().p("AnAFoIAArOIOCAAIAALOg");
	var mask_5_graphics_597 = new cjs.Graphics().p("AtfFoIAArOIbAAAIAALOg");
	var mask_5_graphics_598 = new cjs.Graphics().p("Az/FoIAArOMAn/AAAIAALOg");
	var mask_5_graphics_599 = new cjs.Graphics().p("A6dFoIAArOMA07AAAIAALOg");
	var mask_5_graphics_600 = new cjs.Graphics().p("Egg8AFoIAArOMBB5AAAIAALOg");
	var mask_5_graphics_601 = new cjs.Graphics().p("EgnbAFoIAArOMBO4AAAIAALOg");
	var mask_5_graphics_602 = new cjs.Graphics().p("Egt6AFoIAArOMBb1AAAIAALOg");
	var mask_5_graphics_603 = new cjs.Graphics().p("Eg0ZAFoIAArOMBozAAAIAALOg");
	var mask_5_graphics_604 = new cjs.Graphics().p("Eg64AFoIAArOMB1xAAAIAALOg");
	var mask_5_graphics_605 = new cjs.Graphics().p("EhBXAFoIAArOMCCvAAAIAALOg");
	var mask_5_graphics_966 = new cjs.Graphics().p("EhBXAFoIAArOMCCvAAAIAALOg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(595).to({graphics:mask_5_graphics_595,x:936.5,y:367}).wait(1).to({graphics:mask_5_graphics_596,x:895,y:367}).wait(1).to({graphics:mask_5_graphics_597,x:853.5,y:367}).wait(1).to({graphics:mask_5_graphics_598,x:812,y:367}).wait(1).to({graphics:mask_5_graphics_599,x:770.5,y:367}).wait(1).to({graphics:mask_5_graphics_600,x:729,y:367}).wait(1).to({graphics:mask_5_graphics_601,x:687.5,y:367}).wait(1).to({graphics:mask_5_graphics_602,x:646,y:367}).wait(1).to({graphics:mask_5_graphics_603,x:604.5,y:367}).wait(1).to({graphics:mask_5_graphics_604,x:563,y:367}).wait(1).to({graphics:mask_5_graphics_605,x:521.5,y:367}).wait(361).to({graphics:mask_5_graphics_966,x:521.5,y:367}).wait(594));

	// 2013 row 2
	this.instance_74 = new lib.person();
	this.instance_74.parent = this;
	this.instance_74.setTransform(915.8,376.5,0.372,0.372,0,0,0,33.6,71);

	this.instance_75 = new lib.person();
	this.instance_75.parent = this;
	this.instance_75.setTransform(882.3,376.5,0.372,0.372,0,0,0,33.6,71);

	this.instance_76 = new lib.person();
	this.instance_76.parent = this;
	this.instance_76.setTransform(849.3,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_77 = new lib.person();
	this.instance_77.parent = this;
	this.instance_77.setTransform(816.4,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_78 = new lib.person();
	this.instance_78.parent = this;
	this.instance_78.setTransform(783.5,376.5,0.372,0.372,0,0,0,33.3,71);

	this.instance_79 = new lib.person();
	this.instance_79.parent = this;
	this.instance_79.setTransform(750.6,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_80 = new lib.person();
	this.instance_80.parent = this;
	this.instance_80.setTransform(717.7,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_81 = new lib.person();
	this.instance_81.parent = this;
	this.instance_81.setTransform(684.8,376.5,0.372,0.372,0,0,0,33.3,71);

	this.instance_82 = new lib.person();
	this.instance_82.parent = this;
	this.instance_82.setTransform(619,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_83 = new lib.person();
	this.instance_83.parent = this;
	this.instance_83.setTransform(651.9,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_84 = new lib.person();
	this.instance_84.parent = this;
	this.instance_84.setTransform(125.5,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_85 = new lib.person();
	this.instance_85.parent = this;
	this.instance_85.setTransform(586.2,376.5,0.372,0.372,0,0,0,33.6,71);

	this.instance_86 = new lib.person();
	this.instance_86.parent = this;
	this.instance_86.setTransform(553.2,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_87 = new lib.person();
	this.instance_87.parent = this;
	this.instance_87.setTransform(520.3,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_88 = new lib.person();
	this.instance_88.parent = this;
	this.instance_88.setTransform(487.4,376.5,0.372,0.372,0,0,0,33.3,71);

	this.instance_89 = new lib.person();
	this.instance_89.parent = this;
	this.instance_89.setTransform(454.5,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_90 = new lib.person();
	this.instance_90.parent = this;
	this.instance_90.setTransform(421.6,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_91 = new lib.person();
	this.instance_91.parent = this;
	this.instance_91.setTransform(388.7,376.5,0.372,0.372,0,0,0,33.3,71);

	this.instance_92 = new lib.person();
	this.instance_92.parent = this;
	this.instance_92.setTransform(322.9,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_93 = new lib.person();
	this.instance_93.parent = this;
	this.instance_93.setTransform(257.1,376.5,0.372,0.372,0,0,0,33.3,71);

	this.instance_94 = new lib.person();
	this.instance_94.parent = this;
	this.instance_94.setTransform(355.8,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_95 = new lib.person();
	this.instance_95.parent = this;
	this.instance_95.setTransform(290,376.5,0.372,0.372,0,0,0,33.3,71);

	this.instance_96 = new lib.person();
	this.instance_96.parent = this;
	this.instance_96.setTransform(224.2,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_97 = new lib.person();
	this.instance_97.parent = this;
	this.instance_97.setTransform(191.3,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_98 = new lib.person();
	this.instance_98.parent = this;
	this.instance_98.setTransform(158.4,376.5,0.372,0.372,0,0,0,33.5,71);

	this.instance_74.mask = this.instance_75.mask = this.instance_76.mask = this.instance_77.mask = this.instance_78.mask = this.instance_79.mask = this.instance_80.mask = this.instance_81.mask = this.instance_82.mask = this.instance_83.mask = this.instance_84.mask = this.instance_85.mask = this.instance_86.mask = this.instance_87.mask = this.instance_88.mask = this.instance_89.mask = this.instance_90.mask = this.instance_91.mask = this.instance_92.mask = this.instance_93.mask = this.instance_94.mask = this.instance_95.mask = this.instance_96.mask = this.instance_97.mask = this.instance_98.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74}]},595).to({state:[{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74}]},371).to({state:[]},1).wait(593));

	// MASK1 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_585 = new cjs.Graphics().p("AhAFZIAAqxICBAAIAAKxg");
	var mask_6_graphics_586 = new cjs.Graphics().p("AoVFZIAAqxIQrAAIAAKxg");
	var mask_6_graphics_587 = new cjs.Graphics().p("AvqFZIAAqxIfVAAIAAKxg");
	var mask_6_graphics_588 = new cjs.Graphics().p("A3AFZIAAqxMAuBAAAIAAKxg");
	var mask_6_graphics_589 = new cjs.Graphics().p("A+VFZIAAqxMA8rAAAIAAKxg");
	var mask_6_graphics_590 = new cjs.Graphics().p("EglrAFZIAAqxMBLXAAAIAAKxg");
	var mask_6_graphics_591 = new cjs.Graphics().p("EgtAAFZIAAqxMBaBAAAIAAKxg");
	var mask_6_graphics_592 = new cjs.Graphics().p("Eg0VAFZIAAqxMBosAAAIAAKxg");
	var mask_6_graphics_593 = new cjs.Graphics().p("Eg7rAFZIAAqxMB3XAAAIAAKxg");
	var mask_6_graphics_594 = new cjs.Graphics().p("EhDAAFZIAAqxMCGBAAAIAAKxg");
	var mask_6_graphics_966 = new cjs.Graphics().p("EhDAAFZIAAqxMCGBAAAIAAKxg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(585).to({graphics:mask_6_graphics_585,x:95.6,y:296.5}).wait(1).to({graphics:mask_6_graphics_586,x:142.5,y:296.5}).wait(1).to({graphics:mask_6_graphics_587,x:189.4,y:296.5}).wait(1).to({graphics:mask_6_graphics_588,x:236.4,y:296.5}).wait(1).to({graphics:mask_6_graphics_589,x:283.3,y:296.5}).wait(1).to({graphics:mask_6_graphics_590,x:330.2,y:296.5}).wait(1).to({graphics:mask_6_graphics_591,x:377.2,y:296.5}).wait(1).to({graphics:mask_6_graphics_592,x:424.1,y:296.5}).wait(1).to({graphics:mask_6_graphics_593,x:471,y:296.5}).wait(1).to({graphics:mask_6_graphics_594,x:518,y:296.5}).wait(372).to({graphics:mask_6_graphics_966,x:518,y:296.5}).wait(594));

	// 2013 row 1
	this.instance_99 = new lib.person();
	this.instance_99.parent = this;
	this.instance_99.setTransform(125.5,301.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_100 = new lib.person();
	this.instance_100.parent = this;
	this.instance_100.setTransform(882.2,301.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_101 = new lib.person();
	this.instance_101.parent = this;
	this.instance_101.setTransform(915.8,301.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_102 = new lib.person();
	this.instance_102.parent = this;
	this.instance_102.setTransform(849.3,301.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_103 = new lib.person();
	this.instance_103.parent = this;
	this.instance_103.setTransform(816.4,301.1,0.372,0.372,0,0,0,33.3,71);

	this.instance_104 = new lib.person();
	this.instance_104.parent = this;
	this.instance_104.setTransform(783.5,301.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_105 = new lib.person();
	this.instance_105.parent = this;
	this.instance_105.setTransform(750.6,301.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_106 = new lib.person();
	this.instance_106.parent = this;
	this.instance_106.setTransform(717.7,301.1,0.372,0.372,0,0,0,33.3,71);

	this.instance_107 = new lib.person();
	this.instance_107.parent = this;
	this.instance_107.setTransform(684.8,301.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_108 = new lib.person();
	this.instance_108.parent = this;
	this.instance_108.setTransform(619,301.1,0.372,0.372,0,0,0,33.3,71);

	this.instance_109 = new lib.person();
	this.instance_109.parent = this;
	this.instance_109.setTransform(651.9,301.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_110 = new lib.person();
	this.instance_110.parent = this;
	this.instance_110.setTransform(586.2,301.1,0.372,0.372,0,0,0,33.6,71);

	this.instance_111 = new lib.person();
	this.instance_111.parent = this;
	this.instance_111.setTransform(553.2,301.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_112 = new lib.person();
	this.instance_112.parent = this;
	this.instance_112.setTransform(520.3,301.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_113 = new lib.person();
	this.instance_113.parent = this;
	this.instance_113.setTransform(487.4,301.1,0.372,0.372,0,0,0,33.3,71);

	this.instance_114 = new lib.person();
	this.instance_114.parent = this;
	this.instance_114.setTransform(454.5,301.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_115 = new lib.person();
	this.instance_115.parent = this;
	this.instance_115.setTransform(421.6,301.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_116 = new lib.person();
	this.instance_116.parent = this;
	this.instance_116.setTransform(388.7,301.1,0.372,0.372,0,0,0,33.3,71);

	this.instance_117 = new lib.person();
	this.instance_117.parent = this;
	this.instance_117.setTransform(322.9,301.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_118 = new lib.person();
	this.instance_118.parent = this;
	this.instance_118.setTransform(257.1,301.1,0.372,0.372,0,0,0,33.3,71);

	this.instance_119 = new lib.person();
	this.instance_119.parent = this;
	this.instance_119.setTransform(355.8,301.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_120 = new lib.person();
	this.instance_120.parent = this;
	this.instance_120.setTransform(290,301.1,0.372,0.372,0,0,0,33.3,71);

	this.instance_121 = new lib.person();
	this.instance_121.parent = this;
	this.instance_121.setTransform(224.2,301.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_122 = new lib.person();
	this.instance_122.parent = this;
	this.instance_122.setTransform(191.3,301.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_123 = new lib.person();
	this.instance_123.parent = this;
	this.instance_123.setTransform(158.4,301.1,0.372,0.372,0,0,0,33.5,71);

	this.instance_99.mask = this.instance_100.mask = this.instance_101.mask = this.instance_102.mask = this.instance_103.mask = this.instance_104.mask = this.instance_105.mask = this.instance_106.mask = this.instance_107.mask = this.instance_108.mask = this.instance_109.mask = this.instance_110.mask = this.instance_111.mask = this.instance_112.mask = this.instance_113.mask = this.instance_114.mask = this.instance_115.mask = this.instance_116.mask = this.instance_117.mask = this.instance_118.mask = this.instance_119.mask = this.instance_120.mask = this.instance_121.mask = this.instance_122.mask = this.instance_123.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99}]},585).to({state:[{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99}]},381).to({state:[]},1).wait(593));

	// 2013 shootings
	this.instance_124 = new lib._2013shootingstext();
	this.instance_124.parent = this;
	this.instance_124.setTransform(497,195,1,1,0,0,0,269.2,70);
	this.instance_124.alpha = 0;
	this.instance_124._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_124).wait(566).to({_off:false},0).to({x:507,alpha:1},11,cjs.Ease.get(0.6)).wait(89).to({x:497,alpha:0},7,cjs.Ease.get(0.6)).to({_off:true},293).wait(594));

	// =10 people text
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag0BTIAAilIBnAAIAAASIhTAAIAAA2IBCAAIAAAPIhCAAIAAA7IBVAAIAAATg");
	this.shape_20.setTransform(273.1,588.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgvBTIAAilIAUAAIAACSIBMAAIAAATg");
	this.shape_21.setTransform(260.4,588.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag3BTIAAilIA5AAQALAAAJADQAJACAHAGQAIAGAFALQAFAKAAAMQAAAKgEAKQgEAIgHAFQgGAHgKADQgKAEgLAAIgmAAIAABEgAgiAAIAkAAQAHAAAGgDQAGgCAFgEQAEgEACgGQADgGAAgHQAAgHgDgGQgCgGgEgFQgFgEgFgCQgGgDgHAAIglAAg");
	this.shape_22.setTransform(247.2,588.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgNBVIgMgEIgMgHIgJgKIgJgNIgHgPIgDgRIgCgTQAAgLAFgXIAGgOIAIgNIAKgKQAGgFAGgDIANgFQAHgBAGAAIAPABIANAFQAGADAFAEQAGAFAEAGQAFAFADAHIAGAPQAFAWAAAMIgBASQgCAJgDAIIgHAQIgJAOIgKAJQgFAEgGADIgMAEIgNABgAgSg/QgIAFgGAJQgGAJgEANQgDANAAAOQAAAPADANQAEANAGAJQAGAJAJAFQAIAFAJAAQAKAAAJgFQAIgFAHgJQAGgJADgNQADgNAAgPQAAgPgDgNQgDgNgGgJQgGgJgJgFQgJgEgKAAQgJAAgJAFg");
	this.shape_23.setTransform(231.6,588.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag0BTIAAilIBnAAIAAASIhTAAIAAA2IBCAAIAAAPIhCAAIAAA7IBVAAIAAATg");
	this.shape_24.setTransform(217.5,588.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag3BTIAAilIA5AAQALAAAJADQAJACAHAGQAIAGAFALQAFAKAAAMQAAAKgEAKQgEAIgHAFQgHAHgJADQgKAEgLAAIgnAAIAABEgAgjAAIAlAAQAHAAAGgDQAGgCAEgEQAFgEACgGQACgGAAgHQAAgHgCgGQgCgGgEgFQgEgEgGgCQgGgDgGAAIgnAAg");
	this.shape_25.setTransform(203.8,588.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgMBUQgHgBgFgDQgGgDgFgFIgJgKQgGgIgHgUQgDgKgBgYQAAgOACgOQAEgOAFgMQAEgHAGgGQAFgGAGgEQAHgEAHgCQAIgCAHAAQAIAAAGACQAIACAGAEQAHAEAFAGIAKANQAGANADAOQADAOABANQgBAOgDAPQgEAPgGALIgJANQgGAGgGAEQgGAEgIACQgHACgHAAQgGAAgGgCgAgRhAQgHAEgGAJQgFAJgDANQgDANAAAQQAAAPADAOQADANAFAJQAGAJAIAFQAIAFAIAAQAGAAAFgCIAJgFQAFgDADgFIAHgMIAEgSQACgLAAgLQAAgMgCgNQgDgNgEgKQgEgLgJgHQgJgGgKAAQgJAAgIAFg");
	this.shape_26.setTransform(182.5,588.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag5BVIAAgQIAyAAIAAh/QgMAMgLAJQgKAIgNAHIAAgVQARgJAMgJQAMgKAKgNIANAAIAACZIAvAAIAAAQg");
	this.shape_27.setTransform(168.7,588.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag5AbIAAgQIBzAAIAAAQgAg5gKIAAgQIBzAAIAAAQg");
	this.shape_28.setTransform(146.9,588.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAAAJIgVAoIgPgLIAfgjIgvgHIAGgSIArAUIgFguIARAAIgFAuIArgUIAGASIgvAHIAfAjIgPALg");
	this.shape_29.setTransform(112,585);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgOAPQgGgHAAgIQAAgIAGgGQAHgGAHAAQAJAAAGAGQAGAGAAAIQAAAIgGAHQgGAGgJAAQgHAAgHgGg");
	this.shape_30.setTransform(127,575.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAGBXQgDgEAAgFIAAhOIgFAAIAABOQAAAFgEAEQgDADgFAAQgFAAgDgDQgEgEAAgFIAAh9IgJAhQgDAJgIgCQgEgBgBgEQgCgDABgDIAShBQABgGAHAAIAMAAQAGAHAIAAQAJAAAGgHIAMAAQAHAAABAGIASBBQABADgBADQgCAEgEABQgIACgDgJIgJgiIAAB+QAAAFgEAEQgDADgFAAQgFAAgEgDg");
	this.shape_31.setTransform(127,587);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},585).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},367).to({state:[]},1).wait(607));

	// but baltimore text
	this.instance_125 = new lib.butbaltimoretext();
	this.instance_125.parent = this;
	this.instance_125.setTransform(504,184.4,1,1,0,0,0,315.4,61);
	this.instance_125.alpha = 0;
	this.instance_125._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_125).wait(486).to({_off:false},0).to({x:514,alpha:1},11).wait(58).to({x:504,alpha:0},8).to({_off:true},2).wait(995));

	// no-full
	this.instance_126 = new lib.nofull();
	this.instance_126.parent = this;
	this.instance_126.setTransform(538.3,503.2,0.069,0.069,0,0,0,2.1,33.3);
	this.instance_126._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_126).wait(427).to({_off:false},0).to({regX:2.6,regY:33.2,scaleX:1.06,scaleY:1.06,x:538.5},5,cjs.Ease.get(0.6)).wait(1).to({regX:2.5,scaleX:1,scaleY:1,x:538.3,y:503.1},0).to({_off:true},48).wait(1079));

	// mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_424 = new cjs.Graphics().p("AjYASIAAgjIGxAAIAAAjg");
	var mask_7_graphics_425 = new cjs.Graphics().p("AjYDvIAAndIGxAAIAAHdg");
	var mask_7_graphics_426 = new cjs.Graphics().p("AjYGMIAAsXIGxAAIAAMXg");
	var mask_7_graphics_427 = new cjs.Graphics().p("AjYHrIAAvVIGxAAIAAPVg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(424).to({graphics:mask_7_graphics_424,x:532.5,y:418.4}).wait(1).to({graphics:mask_7_graphics_425,x:532.5,y:439.6}).wait(1).to({graphics:mask_7_graphics_426,x:532.5,y:454.7}).wait(1).to({graphics:mask_7_graphics_427,x:532.5,y:463.8}).wait(54).to({graphics:null,x:0,y:0}).wait(1079));

	// no-line
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("ABWFXQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAA7E4QAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAAhEZQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAAKD5QgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAgAgMDXQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAggC0QAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgyCQQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAgAhCBrQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAhOBEQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAhWAdQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAgAhcgJQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAhdgxQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAhahZQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAhTiAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAhHioQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAg4jOQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAgljyQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgPkUQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBgAAFkxQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAAhlPQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_32.setTransform(524.9,461.1,1.149,1.149);
	this.shape_32._off = true;

	this.shape_32.mask = mask_7;

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(424).to({_off:false},0).to({_off:true},57).wait(1079));

	// no-dot
	this.instance_127 = new lib.citiesdot();
	this.instance_127.parent = this;
	this.instance_127.setTransform(533.6,420.3,1,1,0,0,0,3.7,3.7);
	this.instance_127._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_127).wait(424).to({_off:false},0).to({_off:true},57).wait(1079));

	// chi-full
	this.instance_128 = new lib.chifull();
	this.instance_128.parent = this;
	this.instance_128.setTransform(546.7,150.6,0.201,0.201,0,0,0,62.6,76.2);
	this.instance_128._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_128).wait(416).to({_off:false},0).to({regY:76.3,scaleX:1.13,scaleY:1.13,x:546.8},5,cjs.Ease.get(0.6)).wait(1).to({regY:76.2,scaleX:1,scaleY:1,y:150.5},0).to({_off:true},59).wait(1079));

	// mask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_413 = new cjs.Graphics().p("AlIA3IAAhtIKRAAIAABtg");
	var mask_8_graphics_414 = new cjs.Graphics().p("AlIEsIAApXIKRAAIAAJXg");
	var mask_8_graphics_415 = new cjs.Graphics().p("AlIHbIAAu1IKRAAIAAO1g");
	var mask_8_graphics_416 = new cjs.Graphics().p("AlIJDIAAyFIKRAAIAASFg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(413).to({graphics:mask_8_graphics_413,x:554,y:250.4}).wait(1).to({graphics:mask_8_graphics_414,x:554,y:226}).wait(1).to({graphics:mask_8_graphics_415,x:554,y:208.5}).wait(1).to({graphics:mask_8_graphics_416,x:554,y:198}).wait(65).to({graphics:null,x:0,y:0}).wait(1079));

	// chi-line
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ah8F+QgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAhdFlQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAg+FLQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAggExQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgAgEEUQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBgAAUD3QgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAAsDXQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgABDC2QgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgABWCUQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgABnBwQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAB0BLQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAB8AlQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgACAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAgAB/goQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBgAB4hPQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgABsh2QAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBgABciaQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBgABHi8QAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBgAAvjcQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgAAVj6QgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBgAgGkWQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBgAgkkwQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBgAhDlIQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgAhklfQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgAiGl2QgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_33.setTransform(562.7,194.6,1.149,1.149);
	this.shape_33._off = true;

	this.shape_33.mask = mask_8;

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(413).to({_off:false},0).to({_off:true},68).wait(1079));

	// chi dot
	this.instance_129 = new lib.citiesdot();
	this.instance_129.parent = this;
	this.instance_129.setTransform(543,241.3,1,1,0,0,0,3.7,3.7);
	this.instance_129._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_129).wait(413).to({_off:false},0).to({_off:true},68).wait(1079));

	// la-full
	this.instance_130 = new lib.lafull();
	this.instance_130.parent = this;
	this.instance_130.setTransform(55.2,285.7,0.158,0.158,0,0,0,55.6,7.2);
	this.instance_130._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_130).wait(404).to({_off:false},0).to({regX:55.7,regY:7.4,scaleX:1.1,scaleY:1.1,x:61.8,y:286.9},5,cjs.Ease.get(0.6)).to({_off:true},73).wait(1078));

	// mask (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_401 = new cjs.Graphics().p("AAAFnQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAIABAAIgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgDAAIAAgcQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAAgeQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgeQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgeQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAAgeQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAAgeQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgeQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAAgeQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgeQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgeQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgeQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgeQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAAgeQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgeQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgeQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAAgeQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAAgeQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgcQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIADAAIAAAbQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAIAAAeQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAeQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAIAAAeQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAAAIAAAeQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAeQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAIAAAeQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAAAIAAAeQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAIAAAeQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAeQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAeQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAAAIAAAeQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAeQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAAAIAAAeQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAAAIAAAeQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAeQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAeQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAIAAAdIADACQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAgAAAFFQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAgAAADOQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABgAAAClQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAgAAABVQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAgAAAhxQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAgAAAjoQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABgAADFBIAAAAgAgGEeQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgDEVIAAAAgAgGB+QAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgDB1IAAAAgAgGAuQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgDAlIAAAAgAgGAFQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAgDgBIAAAAgAgGghQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAgDgpIAAAAgAgGhIQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgDhRIAAAAgAgGiYQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgGjBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAgDjJIAAAAgAgGk4QAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgDlBIAAAAgAgGleQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAAAliIAAAAg");
	var mask_9_graphics_402 = new cjs.Graphics().p("AEdFmQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAD1FmQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgADNFmQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAClFmQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAB9FmQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgABVFmQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAAtFmQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIgeAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgcAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIgeAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgBAAIAAgdQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAAgeQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAAgeQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAgWQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAeAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAeAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAeAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABIAeAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAcAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAeAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAeAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAeAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAUAAIAAAKQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAeQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAeQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAeQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAeQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAeQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAeQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAeQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAeQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAcQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAeQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAeQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAeQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAeQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAeQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAeQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAeQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAeQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAALIgTAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAk0EYQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABgAk0juQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABgAhzlfQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAgAAFFmQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAghFmQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAhJFmQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAhxFmQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAiZFmQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAjBFmQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAkRFmQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAk5FmQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIACgCIABAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAElFjIAAAAgAD9FjIAAAAgADVFjIAAAAgACtFjIAAAAgACFFjIAAAAgABdFjIAAAAgAANFjIAAAAgAgZFjIAAAAgAhBFjIAAAAgAhpFjIAAAAgAiRFjIAAAAgAi5FjIAAAAgAkJFjIAAAAgAk7E/QAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAk7AoQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAgAk7hOQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAgAk3hXIAAAAgAk7jHQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAk7kXQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAk3kfIAAAAgAk7k+QAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAgAk3lHIAAAAgAEblfQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgADzlfQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgACjlfQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAArlfQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAADlfQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAgjlfQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAjDlfQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAjrlfQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAk7lfQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAEkliIAAAAgAD8liIAAAAgACsliIAAAAgAA0liIAAAAgAAMliIAAAAgAgaliIAAAAgAi6liIAAAAgAjiliIAAAAgAkyliIAAAAg");
	var mask_9_graphics_403 = new cjs.Graphics().p("AH7FmQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAHTFmQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAGrFmQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAGDFmQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAFbFmQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIgcAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAIgBACIAAgcQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgeQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgeQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAgeQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgeQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgeQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgeQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAgeQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgeQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgeQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgeQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgeQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgeQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAgeQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgeQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgeQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAgeQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAgaQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAcAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABIAeAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAeAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABIAWAAIAAAIQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIAAAeQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIAAAeQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIAAAeQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIAAAeQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAIAAAeQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIAAAeQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAIAAAeQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIAAAeQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAIAAAcQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIAAAeQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIAAAeQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIAAAeQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIAAAeQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIAAAeQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIAAAeQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIAAAeQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIAAAeQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAIAAANIgRAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIgeAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAoQDzQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAgAoQBUQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABgAoQibQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAgAoQkSQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABgAoQk7QgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAgAH3lfQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAgAEvlfQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAgAELFmQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgADjFmQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAC7FmQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgABDFmQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAAbFmQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAgLFmQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAiDFmQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAirFmQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAjTFmQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAlLFmQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAmbFmQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAoTFmQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgCIABgCQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAHcFjIAAAAgAG0FjIAAAAgAGMFjIAAAAgAEUFjIAAAAgADsFjIAAAAgADEFjIAAAAgABMFjIAAAAgAAkFjIAAAAgAgCFjIAAAAgAh6FjIAAAAgAiiFjIAAAAgAjKFjIAAAAgAlCFjIAAAAgAmSFjIAAAAgAoXFDQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAoUE7IAAAAgAIVEuIAAAAgAoXArQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAoUAjIAAAAgAoXjCQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAgAoUjLIAAAAgAoXjrQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAoUjzIAAAAgAGnlfQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAFXlfQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgADflfQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAC3lfQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgACPlfQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgABnlfQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAg3lfQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAhflfQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAivlfQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAjXlfQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAknlfQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAlPlfQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAl3lfQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAnHlfQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAnvlfQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAGvliIAAAAgAFfliIAAAAgADnliIAAAAgAC/liIAAAAgACXliIAAAAgABvliIAAAAgAgvliIAAAAgAhXliIAAAAgAinliIAAAAgAjPliIAAAAgAkfliIAAAAgAlHliIAAAAgAlvliIAAAAgAm/liIAAAAgAnnliIAAAAg");
	var mask_9_graphics_404 = new cjs.Graphics().p("AJvFnQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAJIFnQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAIfFnQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAH4FnQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAHPFnQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAGoFnQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgcAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgIAAIAAgWQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIAAgeQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIAAgeQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIAAgeQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIAAgcQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIAAgeQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIAAgeQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIgBgCIABgCIAeAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAIAeAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAIAeAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAcAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAeAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAGAAIAAAYQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIAAAeQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAIAAAeQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIAAAeQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIAAAeQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAIAAAeQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIAAAeQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIAAAeQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIAAAeQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAIAAAcQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIAAAeQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAIAAAeQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIAAAeQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIAAAeQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAIAAAeQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIAAAeQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIAAAeQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIAAAeQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgBgCIAAgCQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAIAAACIgcAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgeAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAqVEjQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAgAqVDUQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABgAqVA0QAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABgAqVgaQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABgAn8leQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABgAF/FnQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAFXFnQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAEwFnQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAEHFnQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgABAFnQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAgOFnQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAg2FnQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAiGFnQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAjWFnQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAj/FnQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAlPFnQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAl2FnQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAmeFnQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAnHFnQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAnuFnQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAoXFnQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAo+FnQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgApnFnQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAJ4FjIAAAAgAJQFjIAAAAgAIoFjIAAAAgAIAFjIAAAAgAHYFjIAAAAgAGIFjIAAAAgAE4FjIAAAAgAEQFjIAAAAgABIFjIAAAAgAgGFjIAAAAgAguFjIAAAAgAh+FjIAAAAgAjOFjIAAAAgAj2FjIAAAAgAlGFjIAAAAgAluFjIAAAAgAmWFjIAAAAgAm+FjIAAAAgAnmFjIAAAAgAoOFjIAAAAgAo2FjIAAAAgApeFjIAAAAgAqcCrQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAqYCjIAAAAgAqcBbQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAqYBTIAAAAgAqchDQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAqYhLIAAAAgAqchrQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAqYhzIAAAAgAqci7QAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAqYjDIAAAAgAqckLQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAqYkTIAAAAgAqckyQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAqYk7IAAAAgAqclbQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgCIAAgCQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBACIABACQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAKKleQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAI6leQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAITleQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAHqleQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAFyleQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAFLleQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgABbleQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAAyleQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAAKleQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAgbleQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAhEleQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAi7leQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAmDleQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAmsleQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAnTleQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgApMleQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAKTliIAAAAgAJDliIAAAAgAIbliIAAAAgAHzliIAAAAgAF7liIAAAAgAFTliIAAAAgABjliIAAAAgAA7liIAAAAgAATliIAAAAgAgTliIAAAAgAg7liIAAAAgAizliIAAAAgAl7liIAAAAgAmjliIAAAAgAnLliIAAAAgApDliIAAAAgAqTliIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(401).to({graphics:mask_9_graphics_401,x:170.9,y:260.4}).wait(1).to({graphics:mask_9_graphics_402,x:148,y:269.1}).wait(1).to({graphics:mask_9_graphics_403,x:131.6,y:275.3}).wait(1).to({graphics:mask_9_graphics_404,x:121.8,y:279}).wait(78).to({graphics:null,x:0,y:0}).wait(1078));

	// la line
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AnLCXQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAgAm1B1QgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAgAmfBTQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAmHA0QAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAgAHFAvQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAgAGlAWQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAgAltAVQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAgAGFAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAgAlSgGQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAgAFigXQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAk0ghQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAgAFAgqQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAgAkVg7QAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAEdg9QAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAgAD6hOQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAgAjzhQQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAgADVhfQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAjQhjQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAgACwhsQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAgAirhzQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAgACKh4QAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAgAiGiAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgABjiCQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAhfiIQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAgAA9iJQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAAViNQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAgAg4iNQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAgAgQiOQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAg");
	this.shape_34.setTransform(116.7,260.5,1.149,1.149);
	this.shape_34._off = true;

	this.shape_34.mask = mask_9;

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(401).to({_off:false},0).to({_off:true},81).wait(1078));

	// la-dot
	this.instance_131 = new lib.citiesdot();
	this.instance_131.parent = this;
	this.instance_131.setTransform(167.6,267.6,1,1,0,0,0,3.7,3.7);
	this.instance_131._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_131).wait(401).to({_off:false},0).to({_off:true},81).wait(1078));

	// Layer 1
	this.instance_132 = new lib.nyfull();
	this.instance_132.parent = this;
	this.instance_132.setTransform(775.8,188.9,0.179,0.179,0,0,0,26.6,82.2);
	this.instance_132._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_132).wait(392).to({_off:false},0).to({regX:26.4,regY:82.1,scaleX:1.11,scaleY:1.11,x:775.7,y:188.8},5,cjs.Ease.get(0.6)).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},85).wait(1077));

	// mask (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_389 = new cjs.Graphics().p("AjOGNIAAsZIGdAAIAAMZg");
	var mask_10_graphics_390 = new cjs.Graphics().p("AnDGNIAAsZIOHAAIAAMZg");
	var mask_10_graphics_391 = new cjs.Graphics().p("ApyGNIAAsZITlAAIAAMZg");
	var mask_10_graphics_392 = new cjs.Graphics().p("ArbGNIAAsZIW3AAIAAMZg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(389).to({graphics:mask_10_graphics_389,x:669.7,y:205.3}).wait(1).to({graphics:mask_10_graphics_390,x:692.1,y:205.3}).wait(1).to({graphics:mask_10_graphics_391,x:708.1,y:205.3}).wait(1).to({graphics:mask_10_graphics_392,x:717.7,y:205.3}).wait(91).to({graphics:null,x:0,y:0}).wait(1077));

	// ny-line
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AiXDSQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAgAhvDRQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAi/DQQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAhHDPQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAgAjoDOQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAgAggDJQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAkQDHQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAAEDBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAk3DAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAleC6QAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAgAAqC3QAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAgABQCqQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBABQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAgAB0CZQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgACXCGQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAgAC3BuQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgADVBUQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAgADwA2QAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAEIAWQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAgAEcgKQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAgAEuguQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAgAE8hUQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAFHh6QAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAFRihQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAgAFYjKQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_35.setTransform(735.5,214.3,1.149,1.149);
	this.shape_35._off = true;

	this.shape_35.mask = mask_10;

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(389).to({_off:false},0).to({_off:true},94).wait(1077));

	// ny-dot
	this.instance_133 = new lib.citiesdot();
	this.instance_133.parent = this;
	this.instance_133.setTransform(691.5,228.5,1,1,0,0,0,3.7,3.7);
	this.instance_133._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_133).wait(389).to({_off:false},0).to({_off:true},94).wait(1077));

	// p3-blue
	this.instance_134 = new lib.personblue();
	this.instance_134.parent = this;
	this.instance_134.setTransform(834.9,338.5,1.176,1.176,0,0,0,5.4,11.6);
	this.instance_134._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_134).wait(372).to({_off:false},0).to({_off:true},111).wait(1077));

	// p2
	this.instance_135 = new lib.person();
	this.instance_135.parent = this;
	this.instance_135.setTransform(815.2,338.6,0.188,0.188,0,0,0,33.1,70.9);
	this.instance_135._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_135).wait(367).to({_off:false},0).to({_off:true},116).wait(1077));

	// p1
	this.instance_136 = new lib.person();
	this.instance_136.parent = this;
	this.instance_136.setTransform(794.9,338.6,0.188,0.188,0,0,0,33.1,70.9);
	this.instance_136._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_136).wait(362).to({_off:false},0).to({_off:true},121).wait(1077));

	// dc text
	this.instance_137 = new lib.dctext();
	this.instance_137.parent = this;
	this.instance_137.setTransform(861.9,374.7,1,1,0,0,0,94.4,14.3);
	this.instance_137.alpha = 0;
	this.instance_137._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_137).wait(357).to({_off:false},0).to({x:867.4,alpha:1},7,cjs.Ease.get(0.6)).to({_off:true},119).wait(1077));

	// dc donut
	this.instance_138 = new lib.dcdonut();
	this.instance_138.parent = this;
	this.instance_138.setTransform(744.2,327.4,0.126,0.126,0,0,0,28.6,28.6);
	this.instance_138._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_138).wait(352).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:744.3,y:331.4},8,cjs.Ease.get(0.6)).wait(1).to({scaleX:1.39,scaleY:1.39},0).to({_off:true},122).wait(1077));

	// dc stroke
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.5).p("AAKAAIgTAA");
	this.shape_36.setTransform(768.4,358);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(0.5).p("AhhAAIDDAA");
	this.shape_37.setTransform(777.8,358);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(0.5).p("AivAAIFfAA");
	this.shape_38.setTransform(785.9,358);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(0.5).p("AjwAAIHhAA");
	this.shape_39.setTransform(792.8,358);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.5).p("AklAAIJLAA");
	this.shape_40.setTransform(798.4,358);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(0.5).p("AlOAAIKeAA");
	this.shape_41.setTransform(802.8,358);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(0.5).p("AlsAAILZAA");
	this.shape_42.setTransform(805.9,358);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36}]},359).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[]},118).to({state:[]},323).wait(754));

	// dc-dot
	this.instance_139 = new lib.citiesdot();
	this.instance_139.parent = this;
	this.instance_139.setTransform(665.6,269.5,1,1,0,0,0,3.7,3.7);
	this.instance_139._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_139).wait(342).to({_off:false},0).to({_off:true},141).wait(1077));

	// mask (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_344 = new cjs.Graphics().p("AgqFbIAAq1IBVAAIAAK1g");
	var mask_11_graphics_345 = new cjs.Graphics().p("AjVFbIAAq1IGrAAIAAK1g");
	var mask_11_graphics_346 = new cjs.Graphics().p("AltFbIAAq1ILbAAIAAK1g");
	var mask_11_graphics_347 = new cjs.Graphics().p("AnyFbIAAq1IPkAAIAAK1g");
	var mask_11_graphics_348 = new cjs.Graphics().p("ApjFbIAAq1ITHAAIAAK1g");
	var mask_11_graphics_349 = new cjs.Graphics().p("ArAFbIAAq1IWCAAIAAK1g");
	var mask_11_graphics_350 = new cjs.Graphics().p("AsLFbIAAq1IYXAAIAAK1g");
	var mask_11_graphics_351 = new cjs.Graphics().p("AtCFbIAAq1IaFAAIAAK1g");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:null,x:0,y:0}).wait(344).to({graphics:mask_11_graphics_344,x:657.3,y:279.8}).wait(1).to({graphics:mask_11_graphics_345,x:678.8,y:279.8}).wait(1).to({graphics:mask_11_graphics_346,x:697.9,y:279.8}).wait(1).to({graphics:mask_11_graphics_347,x:714.5,y:279.8}).wait(1).to({graphics:mask_11_graphics_348,x:728.7,y:279.8}).wait(1).to({graphics:mask_11_graphics_349,x:740.5,y:279.8}).wait(1).to({graphics:mask_11_graphics_350,x:749.8,y:279.8}).wait(1).to({graphics:mask_11_graphics_351,x:756.7,y:279.8}).wait(132).to({graphics:null,x:0,y:0}).wait(1077));

	// dc-line
	this.instance_140 = new lib.dcline();
	this.instance_140.parent = this;
	this.instance_140.setTransform(703.1,282,1,1,0,0,0,32.5,23);
	this.instance_140._off = true;

	this.instance_140.mask = mask_11;

	this.timeline.addTween(cjs.Tween.get(this.instance_140).wait(345).to({_off:false},0).to({_off:true},138).wait(1077));

	// map
	this.instance_141 = new lib.map();
	this.instance_141.parent = this;
	this.instance_141.setTransform(518.2,373.3,1,1,0,0,0,172.5,108.2);
	this.instance_141.alpha = 0;
	this.instance_141._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_141).wait(295).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(0.6)).wait(7).to({regY:164.2,y:429.3},0).to({regX:172.7,regY:164.4,scaleX:1.7,scaleY:1.7,x:453.7,y:391.8},12,cjs.Ease.get(0.6)).wait(156).to({regX:172.8,regY:164.5,scaleX:0.24,scaleY:0.24,y:392,alpha:0},6).to({_off:true},294).wait(776));

	// all over us
	this.instance_142 = new lib.alloverus();
	this.instance_142.parent = this;
	this.instance_142.setTransform(553.3,195.5,1,1,0,0,0,293.4,53.5);
	this.instance_142.alpha = 0;
	this.instance_142._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_142).wait(288).to({_off:false},0).to({x:543.3,alpha:1},10,cjs.Ease.get(0.6)).wait(23).to({alpha:0},7,cjs.Ease.get(0.6)).to({_off:true},446).wait(786));

	// lethality is up
	this.instance_143 = new lib.lethalityratesup();
	this.instance_143.parent = this;
	this.instance_143.setTransform(508.2,188.8,1,1,0,0,0,346.9,61);
	this.instance_143.alpha = 0;
	this.instance_143._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_143).wait(278).to({_off:false},0).to({x:518.2,alpha:1},10,cjs.Ease.get(0.6)).wait(33).to({alpha:0},7,cjs.Ease.get(0.6)).to({_off:true},446).wait(786));

	// Layer 4 (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_203 = new cjs.Graphics().p("AneCRIAAkgIO9AAIAAEgg");
	var mask_12_graphics_204 = new cjs.Graphics().p("AneDxIAAnhIO9AAIAAHhg");
	var mask_12_graphics_205 = new cjs.Graphics().p("AneFSIAAqjIO9AAIAAKjg");
	var mask_12_graphics_206 = new cjs.Graphics().p("AneGzIAAtlIO9AAIAANlg");
	var mask_12_graphics_207 = new cjs.Graphics().p("AneITIAAwlIO9AAIAAQlg");
	var mask_12_graphics_208 = new cjs.Graphics().p("AneJ0IAAznIO9AAIAATng");
	var mask_12_graphics_209 = new cjs.Graphics().p("AneLVIAA2oIO9AAIAAWog");
	var mask_12_graphics_210 = new cjs.Graphics().p("AneM1IAA5pIO9AAIAAZpg");
	var mask_12_graphics_211 = new cjs.Graphics().p("AneOWIAA8rIO9AAIAAcrg");
	var mask_12_graphics_212 = new cjs.Graphics().p("AneP3IAA/tIO9AAIAAftg");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:null,x:0,y:0}).wait(203).to({graphics:mask_12_graphics_203,x:585,y:541.5}).wait(1).to({graphics:mask_12_graphics_204,x:585,y:531.8}).wait(1).to({graphics:mask_12_graphics_205,x:585,y:522.2}).wait(1).to({graphics:mask_12_graphics_206,x:585,y:512.5}).wait(1).to({graphics:mask_12_graphics_207,x:585,y:502.8}).wait(1).to({graphics:mask_12_graphics_208,x:585,y:493.2}).wait(1).to({graphics:mask_12_graphics_209,x:585,y:483.5}).wait(1).to({graphics:mask_12_graphics_210,x:585,y:473.8}).wait(1).to({graphics:mask_12_graphics_211,x:585,y:464.2}).wait(1).to({graphics:mask_12_graphics_212,x:585,y:454.5}).wait(1348));

	// p3-grey
	this.instance_144 = new lib.persongrey();
	this.instance_144.parent = this;
	this.instance_144.setTransform(582,447,1,1,0,0,0,33.1,70.8);
	this.instance_144._off = true;

	this.instance_144.mask = mask_12;

	this.timeline.addTween(cjs.Tween.get(this.instance_144).wait(203).to({_off:false},0).wait(44).to({alpha:0},7).to({_off:true},526).wait(780));

	// p3-white
	this.instance_145 = new lib.person();
	this.instance_145.parent = this;
	this.instance_145.setTransform(582.2,447.1,0.224,0.224,0,0,0,33.3,70.9);
	this.instance_145.alpha = 0;
	this.instance_145._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_145).wait(183).to({_off:false},0).to({regX:33.2,scaleX:1.2,scaleY:1.2,x:582.1,alpha:1},5,cjs.Ease.get(0.6)).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},51).wait(1320));

	// p2
	this.instance_146 = new lib.person();
	this.instance_146.parent = this;
	this.instance_146.setTransform(479.9,447.1,0.278,0.278,0,0,0,33.2,70.8);
	this.instance_146.alpha = 0;
	this.instance_146._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_146).wait(175).to({_off:false},0).to({regX:33.4,regY:71,scaleX:1.12,scaleY:1.12,x:480.1,y:447.2,alpha:1},5,cjs.Ease.get(0.6)).wait(1).to({regX:33.2,regY:70.9,scaleX:1,scaleY:1,x:479.8,y:447.1},0).wait(66).to({alpha:0},7,cjs.Ease.get(0.6)).to({_off:true},526).wait(780));

	// perosn1
	this.instance_147 = new lib.person();
	this.instance_147.parent = this;
	this.instance_147.setTransform(372.8,447.1,0.21,0.21,0,0,0,33.1,70.8);
	this.instance_147.alpha = 0;
	this.instance_147._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_147).wait(165).to({_off:false},0).to({regX:33.2,regY:70.9,scaleX:1.07,scaleY:1.07,y:447.2,alpha:1},5,cjs.Ease.get(0.6)).wait(1).to({scaleX:1,scaleY:1,y:447.1},0).wait(76).to({alpha:0},7,cjs.Ease.get(0.6)).to({_off:true},526).wait(780));

	// people shot...
	this.instance_148 = new lib.peopleshottext();
	this.instance_148.parent = this;
	this.instance_148.setTransform(488.6,292.2,1,1,0,0,0,189.6,34.2);
	this.instance_148.alpha = 0;
	this.instance_148._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_148).wait(157).to({_off:false},0).to({x:498.6,y:291.2,alpha:1},11,cjs.Ease.get(0.6)).wait(83).to({alpha:0},7,cjs.Ease.get(0.6)).to({_off:true},533).wait(769));

	// 1/3
	this.instance_149 = new lib._13text();
	this.instance_149.parent = this;
	this.instance_149.setTransform(508.6,155.8,1,1,0,0,0,72.4,67.5);
	this.instance_149.alpha = 0;
	this.instance_149._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_149).wait(143).to({_off:false},0).to({x:498.6,alpha:1},11).wait(99).to({y:156.8,alpha:0},7,cjs.Ease.get(0.6)).to({_off:true},540).wait(760));

	// CITIES IN THE US
	this.instance_150 = new lib.CITIESINUSTEXT();
	this.instance_150.parent = this;
	this.instance_150.setTransform(521.2,300.1,1,1,0,0,0,161.6,26);
	this.instance_150.alpha = 0;
	this.instance_150._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_150).wait(79).to({_off:false},0).to({x:511.2,y:301.1,alpha:1},14,cjs.Ease.get(0.6)).wait(34).to({alpha:0},11,cjs.Ease.get(0.6)).to({_off:true},661).wait(761));

	// MOST LETHAL
	this.instance_151 = new lib.MOSTLETHALTEXT();
	this.instance_151.parent = this;
	this.instance_151.setTransform(513.6,230.7,0.083,0.083,0,0,0,177.8,35);
	this.instance_151.alpha = 0;
	this.instance_151._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_151).wait(66).to({_off:false},0).to({regX:177.7,regY:35.1,scaleX:1.04,scaleY:1.04,x:513.3,y:243.6,alpha:1},8,cjs.Ease.get(0.6)).wait(1).to({scaleX:1,scaleY:1},0).wait(46).to({y:240.6,alpha:0},11,cjs.Ease.get(0.6)).to({_off:true},667).wait(761));

	// baltimore is among
	this.instance_152 = new lib.BALTIMOREISAMONGTEXT();
	this.instance_152.parent = this;
	this.instance_152.setTransform(503.3,174.5,1,1,0,0,0,241.7,26);
	this.instance_152.alpha = 0;
	this.instance_152._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_152).wait(49).to({_off:false},0).to({x:513.3,alpha:1},15,cjs.Ease.get(0.6)).wait(51).to({alpha:0},11).to({_off:true},673).wait(761));

	// gun
	this.instance_153 = new lib.gun();
	this.instance_153.parent = this;
	this.instance_153.setTransform(508.8,42.8,8.679,8.679,0,0,0,28.4,0.6);
	this.instance_153.alpha = 0;
	this.instance_153._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_153).wait(6).to({_off:false},0).to({alpha:1},11,cjs.Ease.get(0.6)).wait(8).to({regX:27.9,regY:0,scaleX:1,scaleY:1,x:502.1,y:36},9,cjs.Ease.get(0.6)).wait(1526));

	// bg
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("EhQNAyyMgA1hljMChQAAAMAA1Bljg");
	this.shape_43.setTransform(507.6,304.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#050304").s().p("EhOHAnEMAAAhOHMCcQAAAMAAABOHg");
	this.shape_44.setTransform(500.2,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43}]}).to({state:[{t:this.shape_44}]},1559).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(488.9,279.8,1037.4,650.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;