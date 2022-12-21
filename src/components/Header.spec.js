import { mount } from '@cypress/react';
import React from 'react';


import  Header  from './Header';

describe('<Header /> with title and add button', () => {

    beforeEach(() => {
        mount(<Header onAdd={()=>{}} showAdd={true} />);
    });

    it('has task tracker title', () => {
        cy.find("header").should('have.class', 'header').find('h1').contains('Task Tracker').should('be.visible');
    });

    it('should display plus icon', () => {
        cy.find("header").find('button').get('[class="fas fa-plus"]').should('be.visible');
    });
});