import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
	render() {
		return (
			<Html>
				<Head>
					<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
					<meta name="norton-safeweb-site-verification" content="olltfqdftteezex2ahm2knzdgj6dkv-qa8dy5iejdvsfap13k5a-ubccjcgu-uwb81at4fz2h75n6hrjpxl8h40is3bzc80x5uix4ady4be3dir12du16k0pkbasi071" />
					

					<link rel="stylesheet" href="css/custom-theme/jquery-ui-1.8.19.custom.css" type="text/css" />
					<script src="js/jquery-1.7.2.min.js" type="text/javascript"></script>
					<script src="js/jquery-ui-1.8.19.custom.min.js" type="text/javascript"></script>
					<script type="text/javascript" src="js/jscolor/jscolor.js"></script>
					<script type="text/javascript" src="js/grid-styler.js"></script>
					<link href='https://fonts.googleapis.com/css?family=Just+Me+Again+Down+Here' rel='stylesheet' type='text/css' />
					<link href="css/grid-styler.css" rel="stylesheet" type="text/css" />
				</Head>
				<body className={'twoColFixRt'}>
					<Main />
					<NextScript />
					
				<script type="text/javascript" dangerouslySetInnerHTML={{
					__html: `
					(function() {
						var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
						po.src = 'https://apis.google.com/js/plusone.js';
						var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
					})();
					var _gaq = _gaq || [];
					_gaq.push(['_setAccount', 'UA-13017818-11']);
					_gaq.push(['_trackPageview']);
				
					(function() {
						var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
						ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
						var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
					})();
							`,
				}}>
				
				</script>
				</body>
			</Html >
		);
	}
}

export default Document;