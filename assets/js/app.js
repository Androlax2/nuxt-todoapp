import smartOutline from 'smart-outline'

/**
 * Disabling focus outline without breaking accessibility.
 * This library will only disable the focus outline when the user is using his mouse to navigate your web page.
 * Once a users starts using his keyboard the outline is activated again resulting in the best of both worlds, visually and accessibility wise.
 *
 * @see https://github.com/ambassify/smart-outline
 */
smartOutline.init()
