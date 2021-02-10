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
					<script async src="https://www.googletagmanager.com/gtag/js?id=UA-13017818-11"></script>
					<script type="text/javascript" dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'UA-13017818-11');
						`,
					}}>
					
					</script>
				</body>
			</Html >
		);
	}
}

export default Document;