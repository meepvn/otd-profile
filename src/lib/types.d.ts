export type UserProfileReponse = {
	message: string;
	result: {
		code: number;
		message: string;
		error: Error | null;
		data: {
			gals: Gallery[];
		};
	};
};

export type Gallery = {
	customerShortcut: string;
	galleryId: string;
	galleryShortcut: string;
	customerName: string;
	galleryName: string;
	galleryThumb: string;
	galleryImageCount: number;
	customerAvatar: string;
	topics: string[];
};
