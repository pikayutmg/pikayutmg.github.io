 
  // Fonction pour charger les données depuis le fichier JSON
  async function loadUserData() {
    try {
      const response = await fetch('https://pikayutmg.github.io/web/PikaYut-warn/sys/user/xz-thermique/user.json');
      const userData = await response.json();

      // Sélectionnez la section où les avertissements seront ajoutés
      const userAlertSection = document.getElementById('user-alert');

      // Vérifiez si "user-wbk" existe dans les catégories
      if (userData[0].categories['user-wbk']) {
        // Récupérez la liste des avertissements sous la catégorie 'user-wbk'
        const userWbkList = userData[0].categories['user-wbk'];

        // Parcourez la liste des avertissements et créez un élément div pour chaque
        userWbkList.forEach(userWbkData => {
          // Créez un nouvel élément div pour chaque avertissement
          const userWbkElement = document.createElement('div');
          userWbkElement.classList.add('credit-wrapper');

          // Construisez le contenu en fonction des données JSON de chaque avertissement
          userWbkElement.innerHTML = `
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100%" viewBox="0 0 496 496" enable-background="new 0 0 496 496" xml:space="preserve">
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M250.431976,162.566864 
	C233.676804,167.752396 217.301620,172.808182 200.930969,177.878662 
	C200.465363,178.022873 200.048050,178.323059 198.906601,178.913361 
	C204.980408,182.677414 210.600037,186.363205 216.422989,189.693466 
	C219.994171,191.735870 221.601669,194.268539 221.424530,198.522491 
	C221.106842,206.151947 221.334930,213.804108 221.334930,221.930984 
	C225.720581,220.606003 228.351456,217.472992 231.670074,215.488281 
	C233.608963,214.328735 235.820312,212.228485 237.702591,215.043259 
	C239.308548,217.444870 237.063858,219.015366 235.333389,220.298340 
	C230.783371,223.671677 226.233124,227.052551 221.555466,230.243530 
	C217.360214,233.105423 215.018509,231.936005 214.994064,226.699463 
	C214.957550,218.876602 215.175095,211.038162 215.685104,203.232513 
	C215.993011,198.519791 214.547897,195.467941 210.286331,193.132706 
	C204.013733,189.695465 198.050873,185.688934 191.993195,181.866058 
	C190.219376,180.746643 187.782379,179.867020 188.243652,177.153381 
	C188.655304,174.731735 191.097092,174.545670 192.925247,173.981583 
	C221.551361,165.148697 250.195847,156.375381 278.834167,147.582031 
	C288.539154,144.602127 298.233826,141.588608 307.945374,138.630402 
	C309.643707,138.113098 311.459808,137.126282 313.038116,138.920425 
	C314.780731,140.901352 313.435760,142.697983 312.556641,144.428131 
	C298.519806,172.052322 284.479767,199.674957 270.375092,227.264557 
	C267.963379,231.982025 266.478699,232.257553 262.280151,229.270905 
	C251.285583,221.449921 240.282852,213.640091 229.327682,205.764221 
	C224.639435,202.393768 224.538788,200.429794 228.993774,196.929657 
	C246.168839,183.435791 264.433136,171.455307 282.219513,158.810730 
	C283.971741,157.565063 286.321136,156.064346 287.932190,158.479263 
	C289.686615,161.109116 287.281189,162.694626 285.354370,164.063217 
	C269.870392,175.061295 254.372238,186.039352 238.891251,197.041595 
	C237.412460,198.092560 236.021347,199.266876 233.602081,201.154312 
	C244.255646,208.796280 254.404663,216.076340 265.210327,223.827393 
	C278.378387,198.012360 291.331055,172.619659 304.966644,145.888107 
	C285.971405,151.693619 268.392029,157.066406 250.431976,162.566864 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M319.053192,313.318970 
	C315.196594,316.324554 311.268768,315.206299 305.975708,313.956207 
	C313.624847,310.019928 310.818512,303.803741 311.211426,298.788422 
	C311.635986,293.369690 311.145416,287.846344 311.479797,282.352814 
	C311.679321,279.074921 312.825195,274.955597 306.934052,273.873199 
	C312.805145,272.534760 318.132355,272.267212 323.417755,273.278961 
	C325.052368,273.591858 325.373413,275.840820 326.015900,277.343231 
	C328.817169,283.893951 331.553131,290.472565 334.508667,297.507294 
	C337.318237,295.268707 337.566833,292.331482 338.647339,289.904877 
	C339.998566,286.870392 341.095673,283.723206 342.315887,280.629974 
	C345.539246,272.458893 351.136871,270.288727 360.625305,273.954315 
	C357.155212,275.839844 357.239563,278.885956 357.277496,282.031952 
	C357.369720,289.686340 357.280365,297.342712 357.318756,304.998047 
	C357.334930,308.220428 356.360016,311.819366 360.825867,313.851471 
	C354.346741,315.597168 348.411591,315.344910 341.250061,314.375916 
	C345.665741,311.476318 344.894684,307.812134 344.901978,304.353546 
	C344.916199,297.609192 344.906158,290.864807 343.988770,283.965485 
	C340.441772,293.045868 336.911682,302.132904 333.330841,311.199921 
	C332.745697,312.681519 332.618103,314.839142 330.595520,314.983124 
	C328.199890,315.153717 327.973724,312.792267 327.297638,311.198059 
	C323.165741,301.455597 319.093903,291.687683 314.197937,282.096008 
	C314.197937,290.840027 314.362885,299.588623 314.120911,308.325928 
	C314.016602,312.092743 317.209656,311.589874 319.053192,313.318970 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M138.347870,301.698090 
	C141.261719,306.371552 144.337234,310.431122 150.238388,313.800446 
	C143.515137,315.812683 138.445038,314.736359 133.676788,312.839966 
	C128.525009,310.791107 126.700508,305.145844 122.511238,300.755768 
	C122.483955,305.839233 120.626305,310.363678 126.450562,314.192200 
	C119.271202,315.528656 113.337807,315.228943 105.948349,314.496704 
	C110.566940,311.682098 109.838509,308.148132 109.846649,304.838165 
	C109.872032,294.513123 109.844101,284.187927 109.863258,273.862854 
	C109.868721,270.916534 110.290192,267.867310 106.101204,265.852814 
	C111.536316,263.994904 115.957787,264.613617 120.286911,264.996307 
	C122.470856,265.189331 122.240372,267.393585 122.251511,269.016418 
	C122.297234,275.677490 122.239441,282.339417 122.308403,289.000092 
	C122.324905,290.594177 121.813629,292.313812 123.188560,294.127808 
	C127.305779,291.527985 130.020935,287.504089 133.454712,284.685364 
	C133.920792,282.541779 131.403244,282.918213 131.371414,281.374146 
	C131.688202,279.305908 140.165283,279.154510 145.942764,281.806793 
	C140.637268,282.854706 136.797455,284.573334 133.778488,288.042328 
	C131.730576,290.395538 131.351105,291.970703 133.364136,294.391541 
	C135.164627,296.556763 136.571121,299.049622 138.347870,301.698090 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M237.779358,302.593262 
	C237.736053,297.807068 237.631134,293.473694 237.732849,289.145203 
	C237.804138,286.110931 237.819382,283.196991 234.061234,281.117615 
	C239.045990,279.117310 243.339447,279.816132 247.517990,280.204071 
	C250.173492,280.450623 250.039825,282.936188 250.064331,284.920563 
	C250.142517,291.250061 250.130554,297.580658 250.190445,303.910461 
	C250.225800,307.646057 250.858078,311.184937 255.518021,311.494354 
	C259.130371,311.734161 261.614349,308.258942 261.651001,303.371338 
	C261.688477,298.373871 261.584229,293.374512 261.679016,288.378601 
	C261.733612,285.501648 261.781494,282.741699 257.550201,281.136078 
	C262.778015,279.153778 267.065613,279.785461 271.243469,280.193787 
	C273.760193,280.439758 273.301514,282.861481 273.315521,284.612579 
	C273.370178,291.442444 273.313568,298.273132 273.358551,305.103149 
	C273.379883,308.340851 272.313080,312.049225 277.451447,313.549377 
	C272.316040,315.788971 267.586761,315.722076 263.293030,314.531494 
	C261.049194,313.909332 259.586029,314.023865 257.481201,314.524017 
	C246.494507,317.134796 239.119949,314.620270 237.779358,302.593262 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M400.627991,293.807556 
	C402.490265,294.013733 404.109589,293.478485 405.251190,294.956299 
	C399.303314,300.428711 404.150482,307.868011 401.454590,314.801788 
	C398.014587,309.335510 394.880249,312.184967 391.206207,314.389221 
	C383.333038,319.112762 369.841278,314.201630 366.228333,305.435883 
	C363.035767,297.690063 363.294495,289.744690 366.501770,282.114014 
	C370.229034,273.246246 382.105469,269.361542 392.254028,273.366028 
	C395.160339,274.512817 397.985535,276.258850 400.719818,272.989380 
	C402.579346,277.891327 402.464111,284.515656 400.625763,288.080322 
	C399.077057,287.923920 398.959930,286.675598 398.729065,285.545227 
	C398.319702,283.540680 397.444977,281.746063 396.147003,280.199646 
	C393.107758,276.578735 389.192169,273.953735 384.479675,274.760956 
	C379.652771,275.587799 378.331757,280.067352 377.833771,284.315155 
	C376.961304,291.757721 376.504242,299.257019 378.442322,306.622223 
	C379.394775,310.241882 381.351593,313.173981 385.675171,312.875824 
	C390.200073,312.563812 391.301422,308.969879 391.531677,305.420288 
	C391.768341,301.771942 393.496643,297.400482 387.832489,295.095642 
	C392.291992,292.956940 396.334961,294.254211 400.627991,293.807556 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M79.181015,286.978882 
	C77.538948,295.783264 73.361214,299.523926 65.251709,300.411316 
	C62.672287,300.693573 58.706955,298.896667 57.791012,302.354156 
	C56.758762,306.250793 55.887039,310.959015 62.251289,314.086578 
	C54.832790,315.595154 48.902950,315.119934 42.578533,314.259003 
	C46.117870,311.987274 45.694954,308.724640 45.678513,305.545776 
	C45.637268,297.571899 45.564964,289.596130 45.701809,281.624512 
	C45.754349,278.564240 45.620426,275.785858 42.516487,273.537415 
	C53.264759,273.174988 63.953548,270.596008 73.929260,276.310486 
	C77.768219,278.509583 78.590126,282.548706 79.181015,286.978882 
M66.694275,289.094330 
	C66.680237,287.269104 66.761993,285.437012 66.630951,283.620209 
	C66.403389,280.465302 65.230392,277.810394 62.141918,276.429352 
	C59.314941,275.165222 57.281239,275.265350 57.346081,279.197601 
	C57.419960,283.677826 57.267147,288.162903 57.395672,292.640594 
	C57.447292,294.439178 56.428730,297.009247 59.329861,297.556610 
	C61.847713,298.031616 63.961288,296.794647 65.186386,294.630554 
	C65.975983,293.235809 66.187912,291.514038 66.694275,289.094330 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M168.642761,295.633301 
	C172.476562,293.121582 172.477112,284.682434 169.046112,282.795349 
	C166.562973,281.429596 164.323395,282.725739 164.368820,285.519867 
	C164.376862,286.014313 164.460587,286.520691 164.594131,286.997833 
	C165.609604,290.625824 164.364410,293.249207 160.951370,294.694641 
	C158.002289,295.943542 155.638123,294.652435 154.109497,292.198547 
	C152.127502,289.016815 153.253036,286.076294 155.668716,283.615295 
	C160.592789,278.598785 174.824310,278.059875 180.017960,282.673279 
	C182.411224,284.799164 183.250610,287.661316 183.305969,290.752045 
	C183.389420,295.413727 183.363098,300.077240 183.406555,304.739777 
	C183.436661,307.971863 183.608856,311.154724 188.188812,312.626038 
	C183.572189,315.874817 179.390656,316.170959 175.371780,314.166901 
	C172.808701,312.888733 170.850922,312.930634 168.463364,314.186066 
	C165.882935,315.542908 162.981735,315.404510 160.142471,315.322205 
	C156.285675,315.210388 153.108795,313.629974 152.045212,309.863037 
	C150.867111,305.690552 152.166641,301.916687 155.912888,299.366455 
	C159.613159,296.847565 163.984390,296.420532 168.642761,295.633301 
M171.657150,304.369659 
	C171.038330,302.293182 173.254181,298.600494 169.157074,298.539764 
	C165.611969,298.487213 163.363098,300.880432 163.228012,304.639221 
	C163.117035,307.727600 163.894806,310.519806 167.599884,310.699158 
	C171.360031,310.881134 171.713425,308.096222 171.657150,304.369659 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M207.194824,272.730499 
	C208.576004,272.840820 209.918411,272.743439 210.021866,273.970490 
	C210.654984,281.480530 212.218277,285.409363 217.050308,290.433777 
	C220.152222,286.034454 222.360703,281.334595 224.348709,276.885406 
	C223.639206,274.716644 221.168762,275.993561 220.501068,273.470551 
	C224.731598,272.310669 228.810577,272.389038 233.153397,273.827179 
	C224.490067,276.830261 223.903198,285.430542 220.377792,291.713623 
	C216.476654,298.666321 217.686981,306.275360 219.943878,314.615051 
	C215.019943,315.439056 209.626236,315.262146 203.934952,314.614990 
	C206.694092,306.664459 207.424454,299.113098 202.778625,292.108337 
	C198.688339,285.941162 196.881683,278.121643 189.838623,272.719421 
	C195.488983,272.719421 201.139328,272.719421 207.194824,272.730499 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M296.042969,294.025757 
	C296.061707,296.682251 296.051666,298.848175 296.093994,301.013092 
	C296.264038,309.710785 296.388367,309.860596 304.378113,311.463440 
	C304.966644,313.554016 303.260925,313.974091 301.984711,314.539246 
	C293.072113,318.485931 284.327881,313.246643 283.770935,303.504395 
	C283.505127,298.854523 283.530762,294.172028 283.725647,289.516937 
	C283.879730,285.836975 283.764313,282.548950 278.787720,281.525299 
	C282.102264,278.818665 286.146240,280.479095 288.915405,277.773132 
	C291.337616,275.406250 292.305634,272.159546 294.578735,269.415344 
	C296.857513,272.191406 295.516022,275.239075 296.305206,277.837280 
	C297.422668,281.516449 301.685364,278.600555 303.539398,281.228119 
	C302.125092,284.341919 297.158478,281.386292 296.440887,285.075623 
	C295.907562,287.817719 296.144409,290.709564 296.042969,294.025757 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M98.986176,294.015381 
	C98.987022,298.338898 99.082832,302.168793 98.956444,305.991333 
	C98.859360,308.927582 99.156898,311.614258 103.128952,314.016357 
	C95.742371,315.550140 89.784363,315.438538 83.334702,314.255737 
	C87.514435,309.515198 88.068710,286.349213 84.304726,280.703186 
	C88.453712,279.291382 92.541069,279.774353 96.555023,280.177704 
	C98.610970,280.384308 98.897217,282.338745 98.942291,284.035980 
	C99.026184,287.195007 98.978455,290.357544 98.986176,294.015381 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M432.209717,267.253387 
	C430.846283,264.015137 433.281067,264.727570 434.405548,264.768799 
	C436.890350,264.859863 439.890900,263.681061 441.345703,267.085785 
	C442.441864,269.651276 443.661987,272.163818 445.254883,275.631531 
	C448.929718,270.328674 449.250275,261.167572 458.636505,265.330109 
	C456.570221,271.992523 456.809906,278.856873 458.370605,285.946289 
	C455.869690,286.741943 453.123322,286.511017 450.054352,285.972412 
	C451.260742,281.353760 450.777039,276.784943 450.729553,271.267395 
	C447.490295,276.478790 446.914642,282.045349 443.237427,286.914978 
	C439.657776,281.790222 438.759674,275.924469 435.275116,269.957001 
	C435.559174,275.854126 434.880219,280.670258 435.968903,285.714935 
	C434.905914,286.866547 433.429535,286.211975 431.793579,286.288818 
	C433.523407,279.934906 433.315979,273.781952 432.209717,267.253387 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M306.593811,355.635498 
	C309.488892,355.630493 311.871521,356.209045 312.089600,359.146545 
	C312.318085,362.223938 309.930237,363.382477 307.361420,363.997406 
	C301.512634,365.397430 299.073425,363.156036 298.955597,357.223969 
	C298.900848,354.466949 299.911041,351.728577 298.913696,348.907959 
	C298.392639,347.434326 299.314850,345.603943 300.662964,345.091248 
	C304.188049,343.750732 307.881653,342.853455 311.848572,341.678589 
	C310.644226,347.684326 312.122375,354.495575 303.392975,354.273834 
	C304.169769,356.021210 305.336365,355.414093 306.593811,355.635498 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M145.585785,350.585144 
	C144.117493,353.206970 144.485825,357.580872 141.551407,357.724762 
	C137.887650,357.904358 138.720062,353.171173 137.145935,350.844696 
	C136.716644,350.210175 136.470764,349.451538 135.908844,348.256897 
	C134.589157,351.674652 136.209091,355.005280 134.477005,357.682922 
	C132.353958,357.980286 131.987350,356.608337 131.966766,355.265717 
	C131.903214,351.118622 131.950256,346.968658 132.031036,342.821320 
	C132.057800,341.447571 132.431305,340.144806 134.100143,339.857941 
	C135.925308,339.544220 136.817902,340.513763 137.374619,342.135101 
	C138.444717,345.251465 139.615097,348.333435 141.180328,352.626801 
	C142.718170,348.670044 143.850433,345.685669 145.040253,342.724457 
	C145.668106,341.161865 146.347198,339.516846 148.533890,339.944824 
	C150.615860,340.352295 150.344437,342.138763 150.275345,343.532196 
	C150.038422,348.311432 151.095795,353.228241 149.383041,358.398285 
	C145.759995,355.998230 147.613037,352.800140 146.804092,350.341431 
	C146.755737,350.194458 146.597580,349.942749 146.562317,349.954559 
	C146.272156,350.051605 145.998978,350.199524 145.585785,350.585144 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M422.237366,278.727631 
	C422.303009,281.319305 422.000336,283.508667 423.281860,285.636963 
	C420.396118,286.951294 417.640320,286.310547 414.684357,286.228424 
	C416.420715,279.965668 415.687927,273.910339 415.463715,268.012207 
	C411.488098,266.784485 410.886780,270.147736 409.026520,271.455048 
	C406.476379,266.696198 407.408386,264.838654 412.496582,264.714874 
	C416.807190,264.610046 421.125031,264.596405 425.434723,264.717712 
	C430.202545,264.851837 430.973114,266.346771 429.038330,271.595703 
	C426.869324,270.691589 426.611938,266.888916 423.076080,267.790100 
	C421.402374,271.068237 422.593719,274.758270 422.237366,278.727631 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M212.554626,342.709412 
	C215.739502,338.900330 219.570496,339.234589 223.341019,340.199402 
	C225.006256,340.625519 227.295639,341.799438 226.296295,343.967560 
	C225.199753,346.346558 223.624344,344.429993 222.291687,343.572845 
	C219.461670,341.752563 216.961227,342.777435 215.436096,345.232391 
	C213.524643,348.309204 213.590927,351.769623 216.505707,354.279907 
	C219.087708,356.503571 221.608932,355.751007 223.730728,352.997925 
	C222.474228,350.947784 219.334915,352.804749 218.669998,349.856293 
	C220.700180,347.248566 223.644516,347.694824 226.081116,348.812592 
	C228.827469,350.072449 227.016281,352.964569 227.254700,355.118195 
	C227.577545,358.034515 225.284042,357.970337 223.330017,358.385468 
	C219.347885,359.231567 215.532089,359.021851 212.867111,355.653687 
	C209.760910,351.727875 209.988449,347.358490 212.554626,342.709412 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M257.235016,344.132874 
	C258.117859,344.374420 258.620361,344.606049 259.089874,344.551819 
	C268.863098,343.423126 269.852844,344.359283 269.328247,354.342682 
	C269.268219,355.485077 269.421234,356.692169 268.315491,357.815460 
	C265.147125,357.042023 266.302765,354.318420 265.985291,352.301575 
	C265.676605,350.340271 266.685913,347.340240 263.304779,347.495697 
	C260.496765,347.624725 260.454529,350.189941 260.286621,352.425232 
	C260.147308,354.280060 261.000610,356.450134 258.723450,358.051392 
	C255.802444,356.554718 257.051910,353.778687 256.762238,351.577423 
	C256.525757,349.780487 256.867920,347.548248 254.312759,347.396118 
	C251.521652,347.229950 251.448975,349.451752 251.180954,351.529083 
	C250.897507,353.725983 252.199081,356.538971 248.531128,358.335052 
	C247.282608,353.624847 246.592880,348.940552 248.485153,345.129700 
	C249.690598,342.702026 253.885361,343.678467 257.235016,344.132874 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M91.316162,277.978455 
	C85.820778,275.158936 84.302322,271.593079 86.531723,267.581757 
	C88.434258,264.158569 92.611252,262.982941 95.945526,265.005768 
	C98.651825,266.647552 99.790573,269.195648 99.169861,272.217529 
	C98.365578,276.133087 95.754448,278.102661 91.316162,277.978455 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M233.671921,350.601685 
	C235.270615,349.428772 237.416992,350.345764 238.316360,348.454041 
	C237.498322,346.659393 236.222061,347.279022 235.015305,347.810699 
	C233.987640,348.263458 233.044952,349.171509 231.525986,347.918640 
	C231.400284,344.588043 233.833099,343.952667 236.529633,343.758301 
	C239.704605,343.529480 242.219833,344.650116 242.667816,348.092529 
	C243.086700,351.311371 243.340393,354.547089 244.621078,358.102478 
	C241.113968,358.321686 238.056824,358.687897 235.006439,358.638336 
	C233.148148,358.608154 231.445068,357.675049 230.886047,355.632080 
	C230.258026,353.336884 231.416504,351.841766 233.671921,350.601685 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M354.503418,350.326782 
	C347.741272,349.032471 348.416565,354.278839 347.767853,357.726959 
	C345.606293,358.038849 345.195801,356.835846 345.101929,355.698456 
	C344.911743,353.393158 344.898712,351.069489 344.893799,348.753235 
	C344.873566,339.262207 348.529816,337.056702 358.452881,340.848938 
	C357.361511,343.519440 355.000031,342.799744 353.054291,343.042267 
	C351.369476,343.252258 348.800262,342.442902 348.676758,345.022003 
	C348.550873,347.651611 351.049042,347.098724 352.794312,347.258972 
	C354.609863,347.425690 357.335144,347.062836 354.503418,350.326782 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M285.426544,350.735626 
	C285.116028,353.361176 285.869995,355.754578 284.428894,357.863983 
	C282.011200,356.217194 280.560364,349.017609 282.153900,345.893890 
	C283.940887,342.391022 287.465515,343.788452 290.171417,343.900116 
	C294.151276,344.064362 295.241241,347.252563 295.122345,350.681580 
	C295.037231,353.136566 296.237274,356.002777 293.471832,358.068268 
	C290.734924,356.484833 291.951019,353.904663 291.692780,351.805847 
	C291.470612,349.999847 291.802490,347.881622 289.418976,347.400940 
	C287.232330,346.959930 286.072296,348.379639 285.426544,350.735626 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M164.665451,349.663116 
	C164.953522,347.436737 163.911118,345.136444 166.502777,344.152527 
	C168.280029,346.399078 169.067123,355.321777 167.682404,357.152649 
	C166.326752,358.945099 158.815521,359.040833 156.956482,357.289398 
	C154.415054,354.894958 154.391251,347.230408 156.988419,344.237640 
	C159.082031,345.643921 158.148941,347.812531 158.293381,349.640991 
	C158.488693,352.113190 158.067062,355.294159 161.486557,355.341614 
	C164.486221,355.383270 164.594269,352.466644 164.665451,349.663116 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M183.470032,340.915894 
	C186.249603,341.544037 187.412445,344.195343 190.195801,344.705994 
	C189.254791,347.555328 185.100281,347.134918 185.491806,350.785095 
	C185.823181,353.874481 187.362167,355.345917 190.107193,355.918457 
	C189.631027,358.899963 187.652145,358.598083 185.891769,358.462189 
	C183.741592,358.296234 182.816650,356.875244 182.457779,354.860321 
	C181.890366,351.674683 182.604630,348.161957 179.870148,345.444275 
	C181.031097,343.903961 182.099579,342.486298 183.470032,340.915894 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M328.202576,345.142426 
	C328.019684,351.272675 328.616516,356.994843 327.557098,363.390442 
	C324.052368,359.842560 323.702148,342.727722 326.294708,338.093323 
	C329.154175,339.695343 327.772156,342.468872 328.202576,345.142426 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M172.810913,355.320984 
	C172.808289,349.367798 172.213318,343.801788 173.774704,338.237152 
	C179.436462,343.492859 172.637070,352.025970 179.375473,356.961456 
	C176.264359,359.310181 174.304138,358.796753 172.810913,355.320984 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M367.100891,347.309784 
	C364.270203,348.515198 364.444611,350.739441 364.316681,352.900177 
	C364.208496,354.727539 364.891449,356.916138 361.931732,358.379486 
	C359.940033,353.972992 360.307800,349.607666 361.259277,345.441986 
	C361.810120,343.030243 364.635376,344.087402 366.467651,343.781830 
	C367.561127,343.599457 368.955414,343.557556 369.191864,345.138092 
	C369.368286,346.317505 368.461182,346.865417 367.100891,347.309784 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M340.123779,348.896179 
	C339.531647,351.821960 337.928619,352.809143 335.403503,352.332062 
	C333.460052,351.964905 332.720764,350.635162 332.708679,348.791290 
	C332.696289,346.895416 333.632324,345.563263 335.468628,345.264587 
	C337.937622,344.863037 339.539429,346.049408 340.123779,348.896179 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M196.334625,344.982117 
	C197.099716,349.615875 197.932648,353.940155 195.065277,357.884369 
	C193.175735,353.533752 193.120148,349.123474 194.366257,344.690430 
	C194.555420,344.017456 195.486694,344.290405 196.334625,344.982117 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M276.744415,344.814240 
	C277.460083,349.364471 277.687775,353.553406 276.583679,358.796844 
	C272.269318,355.084839 274.315857,350.976837 273.933228,347.518799 
	C273.767883,346.024506 273.820312,343.953613 276.744415,344.814240 
z"/>
</svg>

<div class="credit-name">
              <div class="credit-type">${userWbkData.type}</div>
              <div class="credit-status">${userWbkData.Titre}</div>
            </div>
            <div class="credit-money is-cancel">${userWbkData.code}</div>
          `;

          // Ajoutez l'élément à la section
          userAlertSection.appendChild(userWbkElement);
        });
      }
    } catch (error) {
      console.error('Erreur lors du chargement des données:', error);
    }
  }

  // Appelez la fonction pour charger les données
  loadUserData();
 
