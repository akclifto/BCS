import React from "react";
import { randomText, randomHeadline } from "../components/randomLorem";

const BCSDashboard = () => (
  <div className="container">
    <div className="dash">
      <div className="dash__component">
        <div className="dash__component-header">
          <a href="/services" className="dash__component-title">
            Services
          </a>
        </div>
        <div className="dash__list">
          <ul className="dash__list--headline">{randomHeadline()}:</ul>
          <li> {randomText()} </li>
          <li> {randomText()} </li>

          <ul className="dash__list--headline">{randomHeadline()}:</ul>
          <li> {randomText()} </li>
        </div>
      </div>
      <div className="dash__component">
        <div className="dash__component-header">
          <a href="/donate" className="dash__component-title">
            Donations
          </a>
        </div>
        <div className="dash__list">
          <ul className="dash__list--headline">{randomHeadline()}:</ul>
          <li> {randomText()} </li>
          <li> {randomText()} </li>

          <ul className="dash__list--headline">{randomHeadline()}:</ul>
          <li> {randomText()} </li>
        </div>
      </div>
      <div className="dash__component">
        <div className="dash__component-header">
          <a href="/volunteer" className="dash__component-title">
            Volunteering
          </a>
        </div>
        <div className="dash__list">
          <ul className="dash__list--headline">{randomHeadline()}:</ul>
          <li> {randomText()} </li>

          <ul className="dash__list--headline">{randomHeadline()}:</ul>
          <li> {randomText()} </li>
          <ul className="dash__list--headline">{randomHeadline()}:</ul>
          <li> {randomText()} </li>
        </div>
      </div>
      <div className="dash__component">
        <div className="dash__component-header">Community</div>
        <div className="dash__list">
          <ul className="dash__list--headline">{randomHeadline()}:</ul>
          <li> {randomText()} </li>
          <li> {randomText()} </li>
          <li> {randomText()} </li>

          <ul className="dash__list--headline">{randomHeadline()}:</ul>
          <li> {randomText()} </li>
          <li> {randomText()} </li>
          <li> {randomText()} </li>
        </div>
      </div>
    </div>
  </div>
);

export default BCSDashboard;
