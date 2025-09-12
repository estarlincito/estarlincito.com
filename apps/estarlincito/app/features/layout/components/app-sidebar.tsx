import type { MenuLinks } from '@repo/content/estarlincito/routes';
import { Link } from '@repo/ui/components/link';
import { LocaleSwitcher } from '@repo/ui/components/locale-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@repo/ui/components/sidebar';
import { ThemeSwitcher } from '@repo/ui/components/theme-switcher';
import { getPathname } from '@repo/utils/pathname';
import { headers } from 'next/headers';

export const AppSidebar = async ({ application, projects }: MenuLinks) => {
  const path = await getPathname(headers);

  return (
    <Sidebar variant='floating'>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{application.label}</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {application.items.map(({ label, route }) => (
                <SidebarMenuItem key={label}>
                  <SidebarMenuButton asChild isActive={path === route}>
                    <Link route={route} variant='default'>
                      <span>{label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={path === projects.route}>
                <Link
                  className='font-medium'
                  route={projects.route}
                  variant='default'
                >
                  {projects.label}
                </Link>
              </SidebarMenuButton>
              <SidebarMenuSub>
                {projects.items.map(({ label, route }) => (
                  <SidebarMenuSubItem key={label}>
                    <SidebarMenuSubButton asChild isActive={path === route}>
                      <Link route={route} variant='default'>
                        {label}
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className='flex-row'>
        <ThemeSwitcher />
        <LocaleSwitcher />
      </SidebarFooter>
    </Sidebar>
  );
};
