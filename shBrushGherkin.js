/**
 *  Author: Michael Hall
 *  URL: http://www.bankofcanada.ca/
 *  License: GPL-2 | GPL-3
 */
SyntaxHighlighter.brushes.Gherkin = function()
{
    /**
     * Filters out the delimiters and values out of tables.
     * @param match: the contents of the matching text
     * @param regexInfo: regular expression info
     * @returns: list of SyntaxHighlighter.Match objects
     */
    function processTable(match, regexInfo){
        return [
                new SyntaxHighlighter.Match('|',match.index,'keyword'),
                new SyntaxHighlighter.Match(match[0].substr(1),match.index+1,'value')
            ];
    }
	
    var keywords = 'Given When And Then Feature Scenario Outline Template Background But Examples';
    this.regexList = [
        { regex: SyntaxHighlighter.regexLib.singleLinePerlComments,	css: 'comments' }, // comments using #
        { regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' }, // "string"
        { regex: /"""[^"]*"""/gm,                                   css: 'string' }, // multiline string (""" ..... """)
        { regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,				css: 'value' }, // numbers
        { regex: new RegExp(this.getKeywords(keywords), 'gmi'),		css: 'keyword' }, // keywords
        { regex: /@[^@\r\n\t ]+/gi,		                            css: 'preprocessor' }, //annotations
        { regex: /\|.*?(?=\|)/g,		                            func: processTable }, //Tables
        { regex: /\|/g,		                                        css: 'keyword' }, //Excess table delimiters
        { regex: /(&lt;|<).*?(&gt;|>)/gi,		                    css: 'value' } //values from tables
    ];
};
SyntaxHighlighter.brushes.Gherkin.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Gherkin.aliases	= ['gherkin', 'behat'];
