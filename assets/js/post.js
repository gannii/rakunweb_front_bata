$(function(){

	var ary_image = [];

	var image_data_temporarily = ''; // 画像データ一時保管用

	var image0 = "";
	var image1 = "";
	var image2 = "";
	var image3 = "";
	var image4 = "";
	var image5 = "";
	var image6 = "";
	var image7 = "";
	var image8 = "";
	var image9 = "";

	function fileget(imgfile) {
		if (!imgfile.files.length) return;
		var file = imgfile.files[0];
		var fr = new FileReader();
		fr.onload = function(evt) {
			if (imgfile.id == "image0") {image0 = evt.target.result;}
			else if (imgfile.id == "image1") {image1 = evt.target.result;}
			else if (imgfile.id == "image2") {image2 = evt.target.result;}
			else if (imgfile.id == "image3") {image3 = evt.target.result;}
			else if (imgfile.id == "image4") {image4 = evt.target.result;}
			else if (imgfile.id == "image5") {image5 = evt.target.result;}
			else if (imgfile.id == "image6") {image6 = evt.target.result;}
			else if (imgfile.id == "image7") {image7 = evt.target.result;}
			else if (imgfile.id == "image8") {image8 = evt.target.result;}
			else if (imgfile.id == "image9") {image9 = evt.target.result;}
		}
		fr.readAsDataURL(file);
	}


	function getFiles(base64, _file) {
	 	
		var barr, bin, i, len;
		bin = atob(base64.split('base64,')[1]);
		len = bin.length;
		barr = new Uint8Array(len);
		i = 0;
		while (i < len) {
			barr[i] = bin.charCodeAt(i);
			i++;
		}
		var blob = new Blob([barr], {type: 'image/jpeg'});

	/* 送信用画像 格納用 */
		ary_image.push(base64);

		var file = window.URL.createObjectURL(blob);


		var line = simplemde.codemirror.getCursor().line;
		var ch = simplemde.codemirror.getCursor().ch;

		//文字列の挿入
		var text = '<img src="' + file + '">\n';

		// sessionStrageに一時保存（key: base64images)
		var postImages = JSON.parse(sessionStorage.getItem('postImages'));
		if(postImages != null){
			var hash = JSON.parse(sessionStorage.getItem("postImages"));
			hash[file] = base64;
			sessionStorage.setItem('postImages', JSON.stringify(hash));
		}else{
			var hash = {};
			hash[file] = base64;
			sessionStorage.setItem('postImages', JSON.stringify(hash));
		}

		simplemde.codemirror.replaceRange(text,{line:line,ch:ch},{line:line,ch:ch});

	}


	var simplemde = new SimpleMDE({
		element: document.getElementById("post_content"),
		spellChecker: false,
		forceSync: true,
		status: false,
		toolbar: [
			{
	            name: "bold",
	            action: SimpleMDE.toggleBold,
	            className: "fa fa-bold",
	            title: "Bold",
	        },
	        {
	            name: "italic",
	            action: SimpleMDE.toggleItalic,
	            className: "fa fa-italic",
	            title: "Italic",
	        },
	        {
	            name: "heading",
	            action: SimpleMDE.toggleHeadingSmaller,
	            className: "fa fa-header",
	            title: "Heading",
	        },
	        "|",
	        {
	            name: "unordered-list",
	            action: SimpleMDE.toggleUnorderedList,
	            className: "fa fa-list-ul",
	            title: "Generic List",
	        },
	        {
	            name: "ordered-list",
	            action: SimpleMDE.toggleOrderedList,
	            className: "fa fa-list-ol",
	            title: "Numbered List",
	        },
	        "|",
	        {
	            name: "link",
	            action: SimpleMDE.drawLink,
	            className: "fa fa-link",
	            title: "Create Link",
	        },
	        {
	            name: "image",
	            action: function customFunction(editor){

	               	$("input#ui_image").trigger("click");
	                
	            },
	            className: "fa fa-picture-o",
	            title: "Insert Image",
	        },
	        "|",
	        {
	            name: "side-by-side",
	            action: SimpleMDE.toggleSideBySide,
	            className: "fa fa-columns no-disable no-mobile",
	            title: "Toggle Side by Side",
	        },
	        {
	            name: "fullscreen",
	            action: SimpleMDE.toggleFullScreen,
	            className: "fa fa-arrows-alt no-disable no-mobile",
	            title: "Toggle Fullscreen",
	        }

	    ]
	});

	$("#post_title").val('')
	$('#post_content').val('');
	simplemde.value('');

	$('#ui_image').on('change', function(e){
		toResize(e.target.files[0]);
	});


	var toResize = function(_file){ // サイズ取得・選択

		var file = _file;
		image_data_temporarily = _file;

		var image = new Image();
		var reader = new FileReader();

		reader.onload = function(e) {
			image.onload = function() {

				var originalWidth = image.width,
					originalHeight = image.height,
					heightPercent = (image.height / image.width).toFixed(2),

					mediumWidth = Math.floor(image.width / 2),
					mediumHeight = Math.floor(mediumWidth * heightPercent),

					smallWidth = Math.floor(image.width / 4),
					smallHeight = Math.floor(smallWidth * heightPercent);

				$('body').append(
					'<div id="dialog-resize" class="dialog">' + 
						'<div class="in">' + 
							'<img src="' + window.URL.createObjectURL(file) + '">' + 
							'<button id="small-size" class="resizeBtn" data-w="' + smallWidth + '" data-h="' + smallHeight + '">小<small>（W:' + smallWidth + 'px ／ H:' + smallHeight + 'px）</small></button>' + 
							'<button id="medium-size" class="resizeBtn" data-w="' + mediumWidth + '" data-h="' + mediumHeight + '">中<small>（W:' + mediumWidth + 'px ／ H:' + mediumHeight + 'px）</small></button>' + 
							'<button id="original-img" class="resizeBtn" data-w="' + originalWidth + '" data-h="' + originalHeight + '">オリジナル<small>（W:' + originalWidth + 'px ／ H:' + originalHeight + 'px）</small></button>' + 
						'</div>' + 
					'</div>'
				);
				$('#dialog-resize').fadeIn();
				$('#overlay').fadeIn();

			}
			image.src = e.target.result;
		}
		reader.readAsDataURL(file);
	}

	$(document).on("click", ".resizeBtn", function(){
		var _file = $(this).attr('data-file'),
			dataW = $(this).attr('data-w'),
			dataH = $(this).attr('data-h');

		drawing(dataW, dataH);

		$('#dialog-resize').fadeOut();
		$('#overlay').fadeOut();
	});


	function drawing(dataW, dataH){

		var file = image_data_temporarily;

		var image = new Image();
		var reader = new FileReader();

		reader.onload = function(e) {
			image.onload = function() {

				var width = dataW,
					height = dataH;

				var canvas = $('#canvas').attr('width', width).attr('height', height);
				var ctx = canvas[0].getContext('2d');

				// ctx.clearRect(0,0,width,height);
				ctx.drawImage(image,0,0,image.width,image.height,0,0,width,height);

				var base64 = canvas.get(0).toDataURL('image/jpeg');        
				getFiles(base64, file);

			}
			image.src = e.target.result;
		}
		reader.readAsDataURL(file);

		image_data_temporarily = '';
	}

// ミラー切替
	$(document).on("click", ".fa-columns", function(){
		$('#code-wrap').toggleClass('mir');
	});

/*
	$(document).on("click", ".overlay", function(){
		removeModal();
	});
*/
	var removeModal = function (){
		$('#dialog-resize, #overlay').fadeOut('fast').queue(function() {
			this.remove();
		});
	};

	var $editor = $('.editor-toolbar');

	$editor.insertAfter($('#insertEditor'));


	var $postCat = $('#post_cat'),
		$postCatLi =$postCat.find('li');

	$postCatLi.on('click', function(){

		if($(this).find('em').hasClass('icon-minus')){
			$(this).find('em').removeClass('icon-minus').addClass('icon-plus');
		}else{
			$(this).find('em').removeClass('icon-plus').addClass('icon-minus');
		}
	});

});