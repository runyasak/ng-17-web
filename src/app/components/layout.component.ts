import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  template: `
    <div class="drawer">
      <input id="app-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex w-screen flex-col">
        <div
          class="navbar min-h-[3.75em] w-full bg-[rgba(26,26,26,1)] px-5 lg:px-6"
        >
          <a href="/" class="cursor-pointer">
            <app-logo />
          </a>
          <label
            htmlFor="app-drawer"
            class="btn-ghost btn-square btn ml-auto lg:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
                fill="white"
              />
            </svg>
          </label>
          <div class="ml-auto hidden flex-none gap-2 lg:flex">
            <!-- <Link
          target="_blank"
          href="https://www.threads.net/@aideatelab"
          class="btn-ghost !min-h-8 btn !h-8 font-normal"
        >
          <img class="h-5" src="/thread_logo.png" alt="" />
        </Link> -->
            <!-- <Link
          target="_blank"
          href="https://twitter.com/aideatelab"
          class="btn-ghost !min-h-8 btn !h-8 font-normal"
        >
          <img class="h-5" src="/twitter_logo.png" alt="" />
        </Link> -->
            <!-- <Link
          href="/#faq"
          class="btn-ghost !min-h-8 btn !h-8 font-normal"
        >
          FAQ
        </Link> -->
            <!-- <Link
          href="https://app.aideatelab.com"
          class="btn-ghost !min-h-8 btn !h-8 font-normal"
        >
          Sign in
        </Link> -->
            <!-- <Link
          href="https://app.aideatelab.com"
          class="btn-primary !min-h-8 btn !h-8 font-normal"
        >
          Get Started
        </Link> -->
          </div>
        </div>

        <div class="min-h-[calc(100vh-17.5em)] lg:min-h-[calc(100vh-15.5em)]">
          <ng-content></ng-content>
        </div>

        <div
          class="container mx-auto flex flex-col gap-6 px-5 py-10 lg:gap-4 lg:px-[7.5em] lg:py-[3.75em]"
        >
          <div
            class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
          >
            <!-- <Link href="/" class="cursor-pointer">
          <AppLogo logoClassName="w-[1.125em]" />
        </Link> -->

            <div class="flex gap-8">
              <a class="link-hover link font-bold">Product</a>
              <!-- <Link href="/#faq" class="link-hover link font-bold">
            FAQ
          </Link> -->
              <a class="link-hover link font-bold">Contact us</a>
            </div>
          </div>

          <div class="text-sm text-secondary">
            © 2023 AI-Deate |
            <!-- <Link href="/terms-of-use" class="link-hover link">
          Terms of Use
        </Link>
        |
        <Link href="/privacy-policy" class="link-hover link">
          Privacy Policy
        </Link>
        |
        <Link href="/content-policy" class="link-hover link">
          Content Policy
        </Link> -->
          </div>
        </div>
      </div>
      <div class="drawer-side">
        <label htmlFor="app-drawer" class="drawer-overlay"></label>
        <ul class="menu h-full w-80 bg-[rgba(26,26,26,1)] px-2 py-3">
          <div class="flex items-center px-2">
            <!-- <AppLogo /> -->
            <label
              htmlFor="app-drawer"
              class="btn-ghost btn-square btn ml-auto justify-end"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                  fill="white"
                />
              </svg>
            </label>
          </div>

          <li>
            <a class="px-2 text-base">Home</a>
          </li>
          <li>
            <!-- <DrawerLink href="/#faq">FAQ</DrawerLink> -->
          </li>
          <li>
            <!-- <Link
          href="https://app.aideatelab.com"
          class="px-2 text-base"
        >
          Sign in
        </Link> -->
          </li>

          <button class="btn-primary btn mx-2 my-3">Get Started</button>
        </ul>
      </div>
    </div>
  `,
})
export class LayoutComponent {}
