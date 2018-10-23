new Vue({
	el: '#app',
	data() {
		return {
			buttons: [
				{
					title: 'Sverre',
					sound: 'sverre.mp3',
					img: 'sverre.jpg'
				},
				{
					title: 'Mamma',
					sound: 'mamma.mp3',
					img: 'mamma.jpg'
				},
				{
					title: 'Pappa',
					sound: 'pappa.mp3',
					img: 'pappa.jpg'
				},
				{
					title: 'Baby',
					sound: 'baby.mp3',
					img: 'audun.jpg'
				},
				{
					title: 'Mat',
					sound: 'mat.mp3',
					img: 'mat.jpg'
				},
				{
					title: 'Sove',
					sound: 'sove.mp3',
					img: 'sove.jpg'
				},
				{
					title: 'Do',
					sound: 'do.mp3',
					img: 'toalett.jpg'
				},
				{
					title: 'Leke',
					sound: 'leke.mp3',
					img: 'leke.jpg'
				}
			]
		}
	},
	methods: {
		play(button) {
			var sound = new Audio('audio/' + button.sound)
			sound.play()
		}
	}
})
