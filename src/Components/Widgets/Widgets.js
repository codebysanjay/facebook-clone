/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

function Widgets() {
	return (
		<div className="widgets">
			<iframe
				src="https://www.facebook.com/v9.0/plugins/page.php?adapt_container_width=true&app_id=113869198637480&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3f90620a0962b8%26domain%3Ddevelopers.facebook.com%26origin%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Ff313af974218b66%26relation%3Dparent.parent&container_width=654&height=1500&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Faagneyagecb&locale=en_US&sdk=joey&show_facepile=true&small_header=false&tabs=timeline&width=340px"
				width="340"
        height="100%"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"></iframe>
		</div>
	);
}

export default Widgets;
