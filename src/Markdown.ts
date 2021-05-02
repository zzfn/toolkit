/**
 * markdown处理工具类
 */
export class Markdown {
    /**
     * 获得标题
     * @param source
     */
    static getTitle(source: string) {
        return source.replace(/^[^#]+\n/g, '')
            .replace(/(?:[^\n#]+)#+\s([^#\n]+)\n*/g, '')
            .replace(/^#\s[^#\n]*\n+/, '')
            .replace(/`{3}}[^`\n]*\n+[^`{3}]+```\n+/g, '')
            .replace(/`([^`\n]+)`/g, '$1')
            .replace(/\*\*?([^*\n]+)\*\*?/g, '$1')
            .replace(/__?([^_\n]+)__?/g, '$1')
            .trim().match(/#{1,6}\s+\S+/g)
    }
}
