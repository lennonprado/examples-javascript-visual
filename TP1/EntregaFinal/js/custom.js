	var canvas = null;
	var context = null;
	var imageData = null;
	var imageDataOriginal = null;


	$(function() {
	    $('#file-input').change(function(e) {
	        var file = e.target.files[0],
	            imageType = /image.*/;
	        if (!file.type.match(imageType))
	            return;
	        var reader = new FileReader();
	        reader.onload = fileOnload;
	        reader.readAsDataURL(file);
			$('#magicHere').show();
			$('.file-input-content').hide();
            $('.btn-mio').show();
	    });

    function fileOnload(e) {
        var $img = $('<img>', { src: e.target.result });
        canvas = $('#magicHere')[0];
        context = canvas.getContext('2d');
        $img.load(function() {
					canvas.width = this.width;
					canvas.height = this.height;
            context.drawImage(this, 0, 0);
            imageData = context.getImageData(0,0,this.width,this.height);
            imageDataOriginal = context.getImageData(0,0,this.width,this.height);
						//context.width = this.width;
						//context.height = this.height;
            context.putImageData(imageData,0,0);
        });
	    }
	});


	function getRed(imageData,x,y){
		var index = (x + y * imageData.width) * 4;
		return imageData.data[index+0];
	}
	function setRed(imageData,x,y,valor){
		var index = (x + y * imageData.width) * 4;
		imageData.data[index+0]=valor;
	}
	function getGreen(imageData,x,y){
		var index = (x + y * imageData.width) * 4;
		return imageData.data[index+1];
	}
	function setGreen(imageData,x,y,valor){
		var index = (x + y * imageData.width) * 4;
		imageData.data[index+1]=valor;
	}
	function getBlue(imageData,x,y){
		var index = (x + y * imageData.width) * 4;
		return imageData.data[index+2];
	}
	function setBlue(imageData,x,y,valor){
		var index = (x + y * imageData.width) * 4;
		imageData.data[index+2]=valor;
	}
  function getDownloadData() {
      return canvas.toDataURL('image/jpg');
  }

  $("#saveImage").click(function() {
      $(this).attr("href", getDownloadData());
  });
