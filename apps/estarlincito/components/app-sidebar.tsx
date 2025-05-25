import {
  ESTARLINCITO_APPLICATION_ROUTES,
  ESTARLINCITO_PROJECTS_ROUTES,
} from '@app/estarlincito/constants/paths';
import { getPathname } from '@repo/lib/pathname';
import { Link } from '@repo/ui/components/link';
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
import { ThemeToggle } from '@repo/ui/components/theme-toggle';
import { headers } from 'next/headers';

export const AppSidebar = async () => {
  const path = await getPathname(headers);

  return (
    <Sidebar variant='floating'>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {ESTARLINCITO_APPLICATION_ROUTES.map(({ label, route }) => (
                <SidebarMenuItem key={label}>
                  <SidebarMenuButton asChild isActive={path === route}>
                    <Link route={route} variant='default'>
                      {/* <icon /> */}
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
              <SidebarMenuButton asChild isActive={path === '/projects'}>
                <Link
                  className='font-medium'
                  route='/projects'
                  variant='default'
                >
                  Projects
                </Link>
              </SidebarMenuButton>
              <SidebarMenuSub>
                {ESTARLINCITO_PROJECTS_ROUTES.map(({ label, route }) => (
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

      <SidebarFooter>
        <ThemeToggle />
      </SidebarFooter>
    </Sidebar>
  );
};
