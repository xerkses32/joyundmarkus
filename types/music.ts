export interface MusicItem {
	id: string
	title: string
	citation?: string
	albumCover: string
	lyrics: string[]
	listenUrl?: string
	layoutType?: 'three-column' | 'two-column'
	reversed?: boolean
	imageSize?: 'small' | 'medium' | 'large'
	imageWidth?: number
	imageHeight?: number
}

