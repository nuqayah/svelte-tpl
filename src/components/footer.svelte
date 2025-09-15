<footer class="border-t bg-muted/30">
    <div class="container py-12">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
            <!-- Brand -->
            <div class="space-y-4">
                <div class="flex items-center gap-2">
                    <div
                        class="relative flex size-9 items-center justify-center overflow-hidden rounded-lg bg-primary/10"
                    >
                        <img src="nuqayah.png" alt="Logo" class="size-6" />
                    </div>
                    <span
                        class="bg-linear-to-r from-foreground to-foreground/80 bg-clip-text text-xl font-bold text-transparent"
                        >SvelteUI</span
                    >
                </div>
                <p class="max-w-xs text-sm text-muted-foreground">
                    Building beautiful, accessible, and performant web applications with Svelte 5
                    and Tailwind CSS 4.
                </p>
                <div class="flex items-center gap-4">
                    <a
                        href="https://github.com/nuqayah"
                        class="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <div class="size-5 fill-[#181717] dark:fill-[#ffffff]">
                            {@html siGithub.svg}
                        </div>
                    </a>
                    <a
                        href="https://x.com/nuqayah"
                        class="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <div class="size-5 fill-[#000000]">
                            {@html siX.svg}
                        </div>
                    </a>
                    <a
                        href="https://nuqayah.com"
                        class="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <img src="nuqayah.png" alt="Nuqayah" class="size-5" />
                    </a>
                </div>
            </div>

            <!-- Links -->
            <div>
                <h3 class="mb-4 font-medium">Product</h3>
                <ul class="space-y-2">
                    <li>
                        <Dialog.Root>
                            <Dialog.Trigger
                                class="text-muted-foreground transition-colors hover:text-foreground"
                                >Features</Dialog.Trigger
                            >
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title>Features</Dialog.Title>
                                    <Dialog.Description>
                                        Explore our product features.
                                    </Dialog.Description>
                                </Dialog.Header>
                                <div class="py-4">
                                    <p>Feature content goes here.</p>
                                </div>
                            </Dialog.Content>
                        </Dialog.Root>
                    </li>
                    <li>
                        <Dialog.Root>
                            <Dialog.Trigger
                                class="text-muted-foreground transition-colors hover:text-foreground"
                                >Pricing</Dialog.Trigger
                            >
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title>Pricing</Dialog.Title>
                                    <Dialog.Description
                                        >View our pricing options.</Dialog.Description
                                    >
                                </Dialog.Header>
                                <div class="py-4">
                                    <p>Pricing content goes here.</p>
                                </div>
                            </Dialog.Content>
                        </Dialog.Root>
                    </li>
                    <li>
                        <Dialog.Root>
                            <Dialog.Trigger
                                class="text-muted-foreground transition-colors hover:text-foreground"
                                >Documentation</Dialog.Trigger
                            >
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title>Documentation</Dialog.Title>
                                    <Dialog.Description
                                        >Access our documentation.</Dialog.Description
                                    >
                                </Dialog.Header>
                                <div class="py-4">
                                    <p>Documentation content goes here.</p>
                                </div>
                            </Dialog.Content>
                        </Dialog.Root>
                    </li>
                    <li>
                        <Dialog.Root>
                            <Dialog.Trigger
                                class="text-muted-foreground transition-colors hover:text-foreground"
                                >Changelog</Dialog.Trigger
                            >
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title>Changelog</Dialog.Title>
                                    <Dialog.Description>See our latest updates.</Dialog.Description>
                                </Dialog.Header>
                                <div class="py-4">
                                    <p>Changelog content goes here.</p>
                                </div>
                            </Dialog.Content>
                        </Dialog.Root>
                    </li>
                </ul>
            </div>

            <!-- Company section with dialogs -->
            <div>
                <h3 class="mb-4 font-medium">Company</h3>
                <ul class="space-y-2">
                    <li>
                        <Dialog.Root>
                            <Dialog.Trigger
                                class="text-muted-foreground transition-colors hover:text-foreground"
                                >About</Dialog.Trigger
                            >
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title>About Us</Dialog.Title>
                                    <Dialog.Description>
                                        Learn more about our company.
                                    </Dialog.Description>
                                </Dialog.Header>
                                <div class="py-4">
                                    <p>About content goes here.</p>
                                </div>
                            </Dialog.Content>
                        </Dialog.Root>
                    </li>
                    <li>
                        <Dialog.Root>
                            <Dialog.Trigger
                                class="text-muted-foreground transition-colors hover:text-foreground"
                                >Blog</Dialog.Trigger
                            >
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title>Blog</Dialog.Title>
                                    <Dialog.Description
                                        >Read our latest articles.</Dialog.Description
                                    >
                                </Dialog.Header>
                                <div class="py-4">
                                    <p>Blog content goes here.</p>
                                </div>
                            </Dialog.Content>
                        </Dialog.Root>
                    </li>
                    <li>
                        <Dialog.Root>
                            <Dialog.Trigger
                                class="text-muted-foreground transition-colors hover:text-foreground"
                                >Careers</Dialog.Trigger
                            >
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title>Careers</Dialog.Title>
                                    <Dialog.Description>Join our team.</Dialog.Description>
                                </Dialog.Header>
                                <div class="py-4">
                                    <p>Careers content goes here.</p>
                                </div>
                            </Dialog.Content>
                        </Dialog.Root>
                    </li>
                    <li>
                        <Dialog.Root>
                            <Dialog.Trigger
                                class="text-muted-foreground transition-colors hover:text-foreground"
                                >Contact</Dialog.Trigger
                            >
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title>Contact Us</Dialog.Title>
                                    <Dialog.Description>
                                        Get in touch with our team.
                                    </Dialog.Description>
                                </Dialog.Header>
                                <div class="py-4">
                                    <p>Contact form goes here.</p>
                                </div>
                            </Dialog.Content>
                        </Dialog.Root>
                    </li>
                </ul>
            </div>

            <!-- Legal section with dialogs -->
            <div>
                <h3 class="mb-4 font-medium">Legal</h3>
                <ul class="space-y-2">
                    <li>
                        <Dialog.Root>
                            <Dialog.Trigger
                                class="text-muted-foreground transition-colors hover:text-foreground"
                                >Privacy</Dialog.Trigger
                            >
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title>Privacy Policy</Dialog.Title>
                                    <Dialog.Description>
                                        Our privacy policy details.
                                    </Dialog.Description>
                                </Dialog.Header>
                                <div class="py-4">
                                    <p>Privacy policy content goes here.</p>
                                </div>
                            </Dialog.Content>
                        </Dialog.Root>
                    </li>
                    <li>
                        <Dialog.Root>
                            <Dialog.Trigger
                                class="text-muted-foreground transition-colors hover:text-foreground"
                                >Terms</Dialog.Trigger
                            >
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title>Terms of Service</Dialog.Title>
                                    <Dialog.Description
                                        >Our terms and conditions.</Dialog.Description
                                    >
                                </Dialog.Header>
                                <div class="py-4">
                                    <p>Terms content goes here.</p>
                                </div>
                            </Dialog.Content>
                        </Dialog.Root>
                    </li>
                    <li>
                        <Dialog.Root>
                            <Dialog.Trigger
                                class="text-muted-foreground transition-colors hover:text-foreground"
                                >Cookie Policy</Dialog.Trigger
                            >
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title>Cookie Policy</Dialog.Title>
                                    <Dialog.Description>How we use cookies.</Dialog.Description>
                                </Dialog.Header>
                                <div class="py-4">
                                    <p>Cookie policy content goes here.</p>
                                </div>
                            </Dialog.Content>
                        </Dialog.Root>
                    </li>
                    <li>
                        <Dialog.Root>
                            <Dialog.Trigger
                                class="text-muted-foreground transition-colors hover:text-foreground"
                                >Licenses</Dialog.Trigger
                            >
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title>Licenses</Dialog.Title>
                                    <Dialog.Description>
                                        Our licensing information.
                                    </Dialog.Description>
                                </Dialog.Header>
                                <div class="py-4">
                                    <p>License content goes here.</p>
                                </div>
                            </Dialog.Content>
                        </Dialog.Root>
                    </li>
                </ul>
            </div>
        </div>

        <div class="mt-12 border-t border-muted pt-8">
            <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
                <span class="text-sm text-muted-foreground"
                    >© 2025 Nuqayah. All rights reserved.</span
                >
                <div class="flex items-center gap-4">
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <Button variant="ghost" size="sm" class="h-8 px-3">Privacy</Button>
                        </Dialog.Trigger>
                        <Dialog.Content>
                            <Dialog.Header>
                                <Dialog.Title>Privacy Policy</Dialog.Title>
                                <Dialog.Description>Our privacy policy details.</Dialog.Description>
                            </Dialog.Header>
                            <div class="py-4">
                                <p>Privacy policy content goes here.</p>
                            </div>
                        </Dialog.Content>
                    </Dialog.Root>

                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <Button variant="ghost" size="sm" class="h-8 px-3">Terms</Button>
                        </Dialog.Trigger>
                        <Dialog.Content>
                            <Dialog.Header>
                                <Dialog.Title>Terms of Service</Dialog.Title>
                                <Dialog.Description>Our terms and conditions.</Dialog.Description>
                            </Dialog.Header>
                            <div class="py-4">
                                <p>Terms content goes here.</p>
                            </div>
                        </Dialog.Content>
                    </Dialog.Root>

                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <Button variant="ghost" size="sm" class="h-8 px-3">Contact</Button>
                        </Dialog.Trigger>
                        <Dialog.Content>
                            <Dialog.Header>
                                <Dialog.Title>Contact Us</Dialog.Title>
                                <Dialog.Description>Get in touch with our team.</Dialog.Description>
                            </Dialog.Header>
                            <div class="py-4">
                                <p>Contact form goes here.</p>
                            </div>
                        </Dialog.Content>
                    </Dialog.Root>
                </div>
            </div>
        </div>
    </div>
</footer>

<script lang="ts">
import {siGithub, siX} from 'simple-icons'

import {Button} from '$ui/button/index.js'
import * as Dialog from '$ui/dialog/index.js'
</script>
