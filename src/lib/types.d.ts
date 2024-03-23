type BaseResponse<T> = {
	message: string;
	result: {
		code: number;
		message: string;
		error: Error | null;
		data: T;
	};
};

export type UserGalleriesReponse = BaseResponse<{ gals: Gallery[] }>;

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

export type ProfileResponse = BaseResponse<Profile>;

export type Profile = {
	name: string;
	email: string;
	description: string;
	shortcut: string;
	job: string;
	avatar: string;
	backgrounds: string[];
	contacts: Contact[];
};

export type Contact = {
	id: string;
	typeContact: string;
	keyContact: string;
	nameContact: string;
	infoDetail: string;
	linkIcon: string;
	backgroundColor: string;
	templateId: string;
	status: number;
};
