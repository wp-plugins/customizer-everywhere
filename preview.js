/*global jQuery, CustomizerEverywherePreview_exports */
var CustomizerEverywherePreview = (function ($) {
	'use strict';

	var self = {
		i18n: {
			parent_frame_document_title_tpl: null
		},
		options: {
			customizer_title_tracks_previewed_document: true
		}
	};

	$.extend(self, CustomizerEverywherePreview_exports);

	self.init = function () {
		if ( self.options.customizer_title_tracks_previewed_document ) {
			self.setParentWindowTitle();
		}
	};

	/**
	 * It is not helpful to see in browser tabs "Customize Twenty Twelve -- WordPress"
	 * This assumes the primary purpose of the customizer is to preview themes, when in reality
	 * it seems the primary purpose is to customize your already-selected theme. In this latter
	 * case, it makes much more sense for the title to reflect the page currently being previewed.
	 */
	self.setParentWindowTitle = function () {
		parent.document.title = self.i18n.parent_frame_document_title_tpl.replace( '{title}', document.title );
	};

	$(function () {
		self.init();
	});

	return self;
}(jQuery));
