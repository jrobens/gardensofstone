(function ($, Drupal, once) {
    'use strict';

    Drupal.behaviors.drulmaAccessibleMegaMenu = {
        attach: function (context, settings) {

            // Synchronized with sv.$breakpoint-large (1024px)
            const breakpoint = 1024;
            const dropdownItems = once('accessibleMegaMenu', '.navbar-item.has-dropdown', context);

            dropdownItems.forEach(function (element) {
                const item = element;
                const trigger = item.querySelector('.navbar-link');
                const dropdown = item.querySelector('.navbar-dropdown');

                if (!trigger || !dropdown) return;

                if (!dropdown.id) {
                    const uniqueId = 'mega-dropdown-' + Math.random().toString(36).substr(2, 9);
                    dropdown.setAttribute('id', uniqueId);
                    trigger.setAttribute('aria-controls', uniqueId);
                }

                trigger.setAttribute('aria-haspopup', 'true');
                if (!trigger.hasAttribute('aria-expanded')) {
                    trigger.setAttribute('aria-expanded', 'false');
                }

                function toggleMenu(open) {
                    const shouldOpen = typeof open === 'boolean' ? open : trigger.getAttribute('aria-expanded') === 'false';
                    trigger.setAttribute('aria-expanded', shouldOpen.toString());

                    if (shouldOpen) {
                        item.classList.add('is-active');
                        dropdown.classList.add('is-active');
                    } else {
                        item.classList.remove('is-active');
                        dropdown.classList.remove('is-active');
                    }
                }

                // Mouse Interactivity
                trigger.addEventListener('click', function (e) {
                    if (window.innerWidth < breakpoint) {
                        e.preventDefault();
                        toggleMenu();

                        // Sibling cleanup loops
                        const siblings = Array.from(item.parentNode.children).filter(child => child !== item);
                        siblings.forEach(sib => {
                            sib.classList.remove('is-active');
                            const sibTrigger = sib.querySelector('.navbar-link');
                            const sibDrop = sib.querySelector('.navbar-dropdown');
                            if (sibTrigger) sibTrigger.setAttribute('aria-expanded', 'false');
                            if (sibDrop) sibDrop.classList.remove('is-active');
                        });
                    }
                });

                item.addEventListener('mouseenter', function() {
                    if (window.innerWidth >= breakpoint) toggleMenu(true);
                });
                item.addEventListener('mouseleave', function() {
                    if (window.innerWidth >= breakpoint) toggleMenu(false);
                });

                // Keyboard Accessibility Navigation
                item.addEventListener('keydown', function (e) {
                    const focusableSubLinks = Array.from(dropdown.querySelectorAll('a, button, input, [tabindex="0"]'));
                    const currentFocusIndex = focusableSubLinks.indexOf(document.activeElement);

                    switch (e.key) {
                        case 'Escape':
                            e.preventDefault();
                            toggleMenu(false);
                            trigger.focus();
                            break;

                        case 'ArrowDown':
                            if (trigger === document.activeElement) {
                                e.preventDefault();
                                toggleMenu(true);
                                if (focusableSubLinks.length > 0) focusableSubLinks[0].focus();
                            } else if (currentFocusIndex > -1 && currentFocusIndex < focusableSubLinks.length - 1) {
                                e.preventDefault();
                                focusableSubLinks[currentFocusIndex + 1].focus();
                            }
                            break;

                        case 'ArrowUp':
                            if (currentFocusIndex > 0) {
                                e.preventDefault();
                                focusableSubLinks[currentFocusIndex - 1].focus();
                            } else if (currentFocusIndex === 0) {
                                e.preventDefault();
                                trigger.focus();
                            }
                            break;

                        case 'Tab':
                            if (e.shiftKey && document.activeElement === focusableSubLinks[0]) {
                                toggleMenu(false);
                            } else if (!e.shiftKey && document.activeElement === focusableSubLinks[focusableSubLinks.length - 1]) {
                                toggleMenu(false);
                            }
                            break;
                    }
                });
            });

            // Close on click outside (Desktop)
            document.addEventListener('click', function(e) {
                if (window.innerWidth >= breakpoint) {
                    if (!e.target.closest('.navbar-item.has-dropdown')) {
                        document.querySelectorAll('.navbar-item.has-dropdown, .navbar-dropdown').forEach(el => {
                            el.classList.remove('is-active');
                        });
                        document.querySelectorAll('.navbar-link').forEach(link => {
                            link.setAttribute('aria-expanded', 'false');
                        });
                    }
                }
            });

            window.addEventListener('resize', function () {
                if (window.innerWidth >= breakpoint) {
                    document.querySelectorAll('.navbar-item.has-dropdown, .navbar-dropdown').forEach(el => {
                        el.classList.remove('is-active');
                    });
                    document.querySelectorAll('.navbar-link').forEach(link => {
                        link.setAttribute('aria-expanded', 'false');
                    });
                }
            });
        }
    };

})(jQuery, Drupal, once);
