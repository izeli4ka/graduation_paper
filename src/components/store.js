// store.js
import { reactive } from 'vue'

export const store = reactive({
    posterData: {
        title: '',
        subtitle: '',
        sections: [],
        footer: ''
    },

    updateTitle(value) {
        this.posterData.title = value
    },

    updateSubtitle(value) {
        this.posterData.subtitle = value
    },

    updateSections(sections) {
        this.posterData.sections = sections.map(element => ({
            title: element.type === 'header' ? element.text : '',
            content: ['text', 'highlightedText', 'image'].includes(element.type) ? element.text : '',
            isSpecial: element.type === 'highlightedText',
            isImage: element.type === 'image',
            imageUrl: element.imageUrl,
            imageName: element.imageName
        })).filter(section => section.title || section.content || section.imageUrl)
    },

    updateFooter(value) {
        this.posterData.footer = value
    }
})
