<section id="demo" class="container py-24">
    <div class="text-center" in:fade={{duration: 500}}>
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Component <span
                class="from-primary bg-gradient-to-r to-violet-500 bg-clip-text text-transparent"
                >Showcase</span
            >
        </h2>
        <p class="text-muted-foreground mx-auto mt-4 max-w-[700px]">
            Explore our beautiful and interactive components built with shadcn-svelte and Tailwind
            CSS 4.
        </p>
    </div>

    <div class="mx-auto mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Form Card -->
        <div class="col-span-1" in:fly={{y: 20, duration: 400, delay: 100}}>
            <Card
                class="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl"
            >
                <CardHeader class="from-primary/10 bg-gradient-to-r to-violet-500/10 pb-8">
                    <div class="flex items-center gap-2">
                        <div class="bg-primary/20 rounded-full p-2">
                            <UserIcon class="text-primary h-5 w-5" />
                        </div>
                        <CardTitle>Authentication</CardTitle>
                    </div>
                    <CardDescription>Secure user authentication forms</CardDescription>
                </CardHeader>
                <CardContent class="p-6 pt-8">
                    <form class="space-y-4">
                        <div class="space-y-2">
                            <Label for="email">Email</Label>
                            <Input
                                bind:value={email}
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div class="space-y-2">
                            <Label for="password">Password</Label>
                            <Input
                                bind:value={password}
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <Button
                            class="from-primary w-full bg-gradient-to-r to-violet-500 hover:opacity-90"
                            >Sign In</Button
                        >
                    </form>
                </CardContent>
            </Card>
        </div>

        <!-- Pricing Card -->
        <div class="col-span-1" in:fly={{y: 20, duration: 400, delay: 200}}>
            <Card
                class="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl"
            >
                <CardHeader class="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 pb-8">
                    <div class="flex items-center gap-2">
                        <div class="rounded-full bg-blue-500/20 p-2">
                            <CrownIcon class="h-5 w-5 text-blue-500" />
                        </div>
                        <CardTitle class="text-lg font-semibold">Premium Plan</CardTitle>
                    </div>
                    <CardDescription class="text-muted-foreground text-sm"
                        >Perfect for growing businesses</CardDescription
                    >
                </CardHeader>
                <CardContent class="p-6 pt-8">
                    <Tabs value="monthly" class="w-full">
                        <TabsList class="mb-6 grid w-full grid-cols-2">
                            <TabsTrigger value="monthly">Monthly</TabsTrigger>
                            <TabsTrigger value="yearly">Yearly</TabsTrigger>
                        </TabsList>
                        <TabsContent value="monthly" class="space-y-4">
                            <div>
                                <span class="text-4xl font-bold">$49</span>
                                <span class="text-muted-foreground">/month</span>
                            </div>
                            <ul class="space-y-2">
                                <li class="flex items-center gap-2">
                                    <CheckIcon class="h-5 w-5 text-green-500" />
                                    <span>Unlimited projects</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <CheckIcon class="h-5 w-5 text-green-500" />
                                    <span>Priority support</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <CheckIcon class="h-5 w-5 text-green-500" />
                                    <span>Custom branding</span>
                                </li>
                            </ul>
                            <Button
                                class="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90"
                                >Get Started</Button
                            >
                        </TabsContent>
                        <TabsContent value="yearly" class="space-y-4">
                            <div>
                                <span class="text-4xl font-bold">$470</span>
                                <span class="text-muted-foreground">/year</span>
                                <span class="ml-2 text-sm text-green-500">(Save 20%)</span>
                            </div>
                            <ul class="space-y-2">
                                <li class="flex items-center gap-2">
                                    <CheckIcon class="h-5 w-5 text-green-500" />
                                    <span>Unlimited projects</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <CheckIcon class="h-5 w-5 text-green-500" />
                                    <span>Priority support</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <CheckIcon class="h-5 w-5 text-green-500" />
                                    <span>Custom branding</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <CheckIcon class="h-5 w-5 text-green-500" />
                                    <span>Annual strategy review</span>
                                </li>
                            </ul>
                            <Button
                                class="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90"
                                >Get Started</Button
                            >
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>

        <!-- Calendar Card -->
        <div class="col-span-1" in:fly={{y: 20, duration: 400, delay: 300}}>
            <Card
                class="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl"
            >
                <CardHeader class="bg-gradient-to-r from-amber-500/10 to-orange-500/10 pb-8">
                    <div class="flex items-center gap-2">
                        <div class="rounded-full bg-amber-500/20 p-2">
                            <CalendarIcon class="h-5 w-5 text-amber-500" />
                        </div>
                        <CardTitle>Calendar</CardTitle>
                    </div>
                    <CardDescription>Schedule and manage events</CardDescription>
                </CardHeader>
                <CardContent class="p-6 pt-8">
                    <div class="space-y-4">
                        <div class="grid grid-cols-7 gap-1">
                            {#each ['M', 'T', 'W', 'T', 'F', 'S', 'S'] as day}
                                <div class="text-center text-xs font-medium">{day}</div>
                            {/each}
                            {#each Array(31) as _, i}
                                <div
                                    class="hover:bg-muted flex aspect-square cursor-pointer items-center justify-center rounded-full text-sm transition-colors"
                                    class:bg-primary={i === 14}
                                    class:text-primary-foreground={i === 14}
                                >
                                    {i + 1}
                                </div>
                            {/each}
                        </div>
                        <Button
                            class="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-90"
                            >Add Event</Button
                        >
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
</section>

<script>
import {CalendarIcon, CheckIcon, CrownIcon, UserIcon} from 'lucide-svelte'
import {fade, fly} from 'svelte/transition'

import {Button} from '$ui/button/index.js'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '$ui/card/index.js'
import {Input} from '$ui/input/index.js'
import {Label} from '$ui/label/index.js'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '$ui/tabs/index.js'

// Form data
let email = $state('')
let password = $state('')
</script>
