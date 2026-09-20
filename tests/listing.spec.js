import { test, expect } from "@playwright/test";

test("listing photos, gallery keyboard controls, room filters, and inquiry", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page).toHaveTitle(/17 42nd Street/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Your Shore Escape Starts Here",
  );
  await page.getByRole("button", { name: "View all photos" }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.locator(".lightbox-caption")).toContainText("1 / 14");
  await page.keyboard.press("ArrowLeft");
  await expect(dialog.locator(".lightbox-caption")).toContainText("14 / 14");
  await page.keyboard.press("ArrowRight");
  await expect(dialog.locator(".lightbox-caption")).toContainText("1 / 14");
  for (let index = 1; index <= 14; index++) {
    await dialog
      .getByRole("button", { name: `Go to photo ${index}`, exact: true })
      .click();
    await expect(dialog.locator(".lightbox-image > img")).toHaveJSProperty(
      "complete",
      true,
    );
    await expect(dialog.locator(".lightbox-image > img")).not.toHaveJSProperty(
      "naturalWidth",
      0,
    );
  }
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(
    page.getByRole("button", { name: "View all photos" }),
  ).toBeFocused();
  await page.getByRole("button", { name: "Downstairs", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Third bedroom" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Primary bedroom" }),
  ).toHaveCount(0);
  await page
    .getByRole("button", { name: "Outdoor living", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Private upper deck" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Arrange a private showing" }),
  ).toHaveAttribute("href", /^mailto:hachadorian@comcast.net\?subject=/);
  expect(errors).toEqual([]);
});

test("mobile navigation and layout fit a narrow screen", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "The details" })
    .click();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toHaveCount(0);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await page.getByRole("button", { name: "All 14 photos" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("button", { name: "Next photo" }).click();
  await expect(page.locator(".lightbox-caption")).toContainText("2 / 14");
  await page.getByRole("button", { name: "Close photo gallery" }).click();
  await expect(page.getByRole("dialog")).not.toBeVisible();
});
